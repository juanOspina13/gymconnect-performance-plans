import {
  registerUserSchema,
  type RegisterUserSchema,
} from "@/components/UserCreateEdit/RegisterUserSchema";
import { postSuscripcionMercadoPago } from "@/http/transaccion-service";
import { createUserRequest, ssoLogin } from "@/http/user-services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface UseUserCreateEditProps {
  planTitle?: string;
  dataUser?: any;
}

interface CreateUserData extends RegisterUserSchema {
  username: string;
  plan?: string;
  referido_por?: string;
}

export const useUserCreateEdit = ({
  planTitle,
}: UseUserCreateEditProps = {}) => {
  const [loading, setLoading] = useState(false);
  const [suscripcion, setSuscripcion] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
    mode: "onChange",
  });

  const createUser = useMutation({
    mutationFn: (data: CreateUserData) => createUserRequest(data),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      console.log("User created:", data);
      ssoLogin(data.email).then(({ token }) => {
        localStorage.setItem("user-token", token);
      });
      setLoading(false);
      //toast("¡Recibimos tu solicitud exitosamente! Pronto te contactaremos.");
      //reset();
      // onSuccess?.();
    },
    onError: () => {
      setLoading(false);
      toast("Error al registrar la solicitud. Por favor, intenta de nuevo.");
    },
  });

  // You need to import or implement the correct service for creating a subscription

  const createSuscription = useMutation({
    mutationFn: (data: {
      mercadoPago: {
        title: string;
        quantity: number;
        currency: "COP";
        unit_price: number;
        dataUser: any;
      };
    }) => postSuscripcionMercadoPago(data),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (successData) => {
      setLoading(false);
      toast("Por favor realiza la suscripción");
      console.log("Suscripción creada:", successData);
      window.open(successData.init_point, "_blank");
      reset();
      // onSuccess?.();
    },
    onError: () => {
      setLoading(false);
      toast("Error al registrar la solicitud. Por favor, intenta de nuevo.");
    },
  });

  const onSubmit: SubmitHandler<RegisterUserSchema> = async (data) => {
    const submitData: CreateUserData = {
      ...data,
      username: data.email,
      plan: suscripcion,
    };
    submitData.referido_por = "performance_plans -> " + suscripcion;
    try {
      createSuscription.mutate({
        mercadoPago: {
          title: `${planTitle}`,
          quantity: 1,
          currency: "COP",
          unit_price: 200000, // You can set the price accordingly
          dataUser: submitData,
        },
      });
      //createUser.mutate(submitData);
    } catch (error) {
      console.error(error);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    loading,
    goBack,
    suscripcion,
    setSuscripcion,
    createSuscription,
  };
};

import { registerUserSchema, type RegisterUserSchema } from "@/components/UserCreateEdit/RegisterUserSchema";
import { createUserRequest } from "@/http/user-services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface UseUserCreateEditProps {
  onSuccess?: () => void;
  planTitle?: string;
}

interface CreateUserData extends RegisterUserSchema {
  username: string;
  plan?: string;
  referido_por?: string;
}

export const useUserCreateEdit = ({ onSuccess, planTitle }: UseUserCreateEditProps = {}) => {
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
    onSuccess: () => {
      setLoading(false);
      toast("¡Recibimos tu solicitud exitosamente! Pronto te contactaremos.");
      reset();
      onSuccess?.();
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
      plan: suscripcion || planTitle,
    };
    submitData.referido_por = "performance_plans -> " + planTitle;
    try {
      createUser.mutate(submitData);
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
    createUser,
    suscripcion,
    setSuscripcion,
  };
};

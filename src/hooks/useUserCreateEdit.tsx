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

export const useUserCreateEdit = ({ onSuccess, planTitle }: UseUserCreateEditProps = {}) => {
  const [loading, setLoading] = useState(false);

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
    mutationFn: (data: RegisterUserSchema) => createUserRequest(data),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      toast("Usuario registrado exitosamente");
      reset();
      onSuccess?.(); // Call the onSuccess callback if provided
    },
    onError: () => {
      setLoading(false);
      toast("Error al registrar el usuario");
    },
  });

  const onSubmit: SubmitHandler<RegisterUserSchema> = async (data) => {
    const submitData = {
      ...data,
      username: data.email,
      telefono: data.telefono,
      plan: planTitle, // Include the plan title in the submission
    };
    try {
      createUser.mutate(submitData as RegisterUserSchema);
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
  };
};

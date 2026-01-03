import { z } from "zod";

 
export const registerUserSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  descripcion: z.string().min(2, "La descripción debe tener al menos 2 caracteres"),
  email: z.string().email("El correo no es válido"),
  telefono: z.string().length(10, "El teléfono debe tener exactamente 10 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  trabajo: z.string().min(2, "El trabajo debe tener al menos 2 caracteres"),
  cargo: z.string().min(2, "El cargo debe tener al menos 2 caracteres"),
});

// Tip inferido automáticamente:
export type RegisterUserSchema = z.infer<typeof registerUserSchema>;

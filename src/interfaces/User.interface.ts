import { type BilleteraI } from "./Billetera.interface";

export interface UserI {
  id: number;
  nombre: string;
  cedula?: string;
  genero?: string;
  objetivo?: string;
  fecha_nacimiento?: string;
  telefono?: string;
  direccion: string;
  rol: string;
  email: string;
  username: string;
  password?: string;
  enabled?: boolean;
  roles: Array<string>;
  como_llego?: string;
  referido_por?: string;
  estado: string;
  embajador?: boolean;
  categoria_entrenador?: number;
  src_foto?: string;
  empresa?: string;
  password_assigned?: boolean;
  microzona?: any;
  registerSource?: string;
  isEmailValidated?: boolean;
  used_free_trial?: boolean;
  comparte_pruebas?: boolean;
  billetera_id?: BilleteraI | any;
  referalPaid?: boolean;
}
import { useUserCreateEdit } from "@/hooks/useUserCreateEdit";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

interface UserCreateEditProps {
  onSuccess?: () => void; 
  planTitle?: string;
}

function UserCreateEdit({  planTitle }: UserCreateEditProps) {
  const { register, handleSubmit, errors, isValid, onSubmit, loading, goBack } =
    useUserCreateEdit({ planTitle });

  return (
    <form
      className="bg-gray-900 border border-gray-700 rounded-2xl p-6 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2">
        <Label htmlFor="nombre" className="text-white">
          Nombre
        </Label>
        <Input
          id="nombre"
          placeholder="Tu nombre completo"
          {...register("nombre")}
          className={`bg-gray-800 border-gray-600 text-white ${
            errors.nombre ? "border-red-500" : ""
          }`}
        />
        {errors.nombre && (
          <span className="text-red-500 text-sm">{errors.nombre.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="celular" className="text-white">
          Celular
        </Label>
        <Input
          id="celular"
          placeholder="Tu número de celular"
          {...register("telefono")}
          className={`bg-gray-800 border-gray-600 text-white ${
            errors.telefono ? "border-red-500" : ""
          }`}
        />
        {errors.telefono && (
          <span className="text-red-500 text-sm">
            {errors.telefono.message}
          </span>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          {...register("email")}
          className={`bg-gray-800 border-gray-600 text-white ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">
          Contraseña
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Tu contraseña"
          {...register("password")}
          className={`bg-gray-800 border-gray-600 text-white ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="trabajo" className="text-white">
          Trabajo
        </Label>
        <Input
          id="trabajo"
          placeholder="¿En qué trabajas?"
          {...register("trabajo")}
          className={`bg-gray-800 border-gray-600 text-white ${
            errors.trabajo ? "border-red-500" : ""
          }`}
        />
        {errors.trabajo && (
          <span className="text-red-500 text-sm">{errors.trabajo.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cargo" className="text-white">
          Cargo
        </Label>
        <Input
          id="cargo"
          placeholder="¿Qué cargo desempeñas?"
          {...register("cargo")}
          className={`bg-gray-800 border-gray-600 text-white ${
            errors.cargo ? "border-red-500" : ""
          }`}
        />
        {errors.cargo && (
          <span className="text-red-500 text-sm">{errors.cargo.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="descripcion" className="text-white">
          Cuéntanos sobre tu estilo de vida y rutina diaria
        </Label>
        <Textarea
          id="descripcion"
          placeholder="Cuéntanos un poco sobre ti..."
          {...register("descripcion")}
          className={`bg-gray-800 border-gray-600 text-white resize-none ${
            errors.descripcion ? "border-red-500" : ""
          }`}
          rows={3}
        />
        {errors.descripcion && (
          <span className="text-red-500 text-sm">
            {errors.descripcion.message}
          </span>
        )}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}

      <div className="flex gap-4 pt-2">
        <Button
          type="submit"
          disabled={loading || !isValid}
          className="w-full bg-primary text-black hover:bg-primary-hover font-bold"
        >
          Enviar solicitud
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={goBack}
          className="w-full"
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}

export default UserCreateEdit;

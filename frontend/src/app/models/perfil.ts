import { Rol } from "./rol";
import { Usuario } from "./usuario";

export class Perfil {
    id: number;
    status: string;
    usuario: Usuario;
    rol: Rol;
    set(data){
        this.id = data.id;
        this.status = data.status;
        this.usuario = new Usuario();
        this.usuario.set(data.usuario);
        this.rol = new Rol();
        this.rol.set(data.rol);
    }
}

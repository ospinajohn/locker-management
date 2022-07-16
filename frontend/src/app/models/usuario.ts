export class Usuario {
    public id: string;
    public name: string;
    public apellidos: string;
    public edad: number;
    public email: string;
    public password: string
    public status: string;
    set(data: any){
        this.id = data.id;
        this.name = data.name;
        this.apellidos = data.apellidos;
        this.edad = data.edad;
        this.email = data.email;
        this.status = data.status;
        this.password = data.password;
    }
}

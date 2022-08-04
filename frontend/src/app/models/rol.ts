export class Rol {
    id: number;
    name: string;
    status: string;
    set(data: any){
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
    }
}

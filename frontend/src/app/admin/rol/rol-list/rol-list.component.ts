import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/models/perfil';
import { Rol } from 'src/app/models/rol';
import { PerfilService } from 'src/app/services/perfil.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
	selector: 'app-rol-list',
	templateUrl: './rol-list.component.html',
	styleUrls: ['./rol-list.component.scss'],
})
export class RolListComponent implements OnInit {
	public rols: Rol[] = [];
	public rol: Rol;

    public perfiles: Perfil[] = [];
    public perfil: Perfil;

	public rolSubscription = new Subscription();
    public perfilSubscription = new Subscription();

    public bandera;

	constructor(
        public rolservice: RolService,
        public perfilservice: PerfilService
    ) {}

	ngOnInit() {
        this.rolSubscription = this.rolservice.all$().subscribe((res: Rol[])=>{
            this.rols = res;
        });
        this.rolservice.all().subscribe(res => {
            console.log(this.rols);
        })
    }
    cargarRoles(item: Rol){
        this.bandera = true;
        this.perfiles = [];
        this.perfilSubscription = this.perfilservice.all$().subscribe((res: Perfil[])=>{
            this.perfiles = res;
        })
        this.perfilservice.search(item.id).subscribe((res: Perfil[])=>{
            console.log('Funcionado...',this.perfiles);
        })

    }
}

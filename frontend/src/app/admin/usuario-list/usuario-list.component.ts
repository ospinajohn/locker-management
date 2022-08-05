import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-usuario-list',
	templateUrl: './usuario-list.component.html',
	styleUrls: ['./usuario-list.component.scss'],
})
export class UsuarioListComponent implements OnInit {
    public usuarios: Usuario[] = [];
    public usuario: Usuario;
    public perfiles: Perfil[] = [];
    public perfil: Perfil;
    public usuarioSubscription = new Subscription();
    public perfilSubscription = new Subscription();

	constructor(
        public userservice: UsuarioService,
        public perfilservice: PerfilService
    ) {}

	ngOnInit() {
        this.usuarios = [];
        this.usuarioSubscription = this.userservice.all$().subscribe((res: Usuario[])=>{
            this.usuarios = res;
        });
        this.userservice.all().subscribe(res => {
            console.log('Listo...');
        });

        this.perfiles = [];
        this.perfilSubscription = this.perfilservice.all$().subscribe((res: Perfil[])=>{
            this.perfiles = res;
        })
        this.perfilservice.all().subscribe(res => {
            console.log('Funcionado...',this.perfiles);
        })
    }
}

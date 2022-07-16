import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-usuario-list',
	templateUrl: './usuario-list.component.html',
	styleUrls: ['./usuario-list.component.scss'],
})
export class UsuarioListComponent implements OnInit {
    public usuarios: Usuario[] = [];
    public usuario: Usuario;
    public usuarioSubscription = new Subscription();

	constructor(
        public userservice: UsuarioService
    ) {}

	ngOnInit() {
        this.usuarioSubscription = this.userservice.all$().subscribe((res: Usuario[])=>{
            this.usuarios = res;
        });
        this.userservice.all().subscribe(res => {
            console.log('Listo...');
        });
    }
}

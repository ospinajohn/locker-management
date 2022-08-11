import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-usuario-item',
	templateUrl: './usuario-item.component.html',
	styleUrls: ['./usuario-item.component.scss'],
})
export class UsuarioItemComponent implements OnInit {
    @Input() usuario: Usuario;
    @Input() perfil: Perfil;
	constructor(
        public usuarioService: UsuarioService,
        public perfilService: PerfilService
    ) {}

	ngOnInit() {}
    borrar(){
        this.usuarioService.delete(this.usuario.id).subscribe((res) => {
            console.log('Borrado...');
        }),
        (error) => {
            console.log(error);
        };
    }
}

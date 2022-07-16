import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-usuario-item',
	templateUrl: './usuario-item.component.html',
	styleUrls: ['./usuario-item.component.scss'],
})
export class UsuarioItemComponent implements OnInit {
    @Input() usuario: Usuario;
	constructor(
        public usuarioService: UsuarioService
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

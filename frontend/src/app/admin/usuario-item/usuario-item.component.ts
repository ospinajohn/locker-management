import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
	selector: 'app-usuario-item',
	templateUrl: './usuario-item.component.html',
	styleUrls: ['./usuario-item.component.scss'],
})
export class UsuarioItemComponent implements OnInit {
    @Input() usuario: Usuario;
	constructor() {}

	ngOnInit() {}
}

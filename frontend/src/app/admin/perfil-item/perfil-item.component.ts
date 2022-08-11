import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
	selector: 'app-perfil-item',
	templateUrl: './perfil-item.component.html',
	styleUrls: ['./perfil-item.component.scss'],
})
export class PerfilItemComponent implements OnInit {
    @Input() perfil: Perfil;
	constructor(
        public perfilService: PerfilService
    ) {}

	ngOnInit() {}
}

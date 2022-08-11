import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';

@Component({
	selector: 'app-one-item',
	templateUrl: './one-item.component.html',
	styleUrls: ['./one-item.component.scss'],
})
export class OneItemComponent implements OnInit {
	@Input() perfil: Perfil;
    constructor() {}

	ngOnInit() {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
	selector: 'app-rol-item',
	templateUrl: './rol-item.component.html',
	styleUrls: ['./rol-item.component.scss'],
})
export class RolItemComponent implements OnInit {
	@Input() rol: Rol;
   
    constructor(
        public rolService: RolService
    ) {}

	ngOnInit() {}
}

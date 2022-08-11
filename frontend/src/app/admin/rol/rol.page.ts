import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-rol',
	templateUrl: './rol.page.html',
	styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {
	constructor(public router: Router) {}

	ngOnInit() {}
	regresar() {
        this.router.navigate(['/admin']);

        
	}
}

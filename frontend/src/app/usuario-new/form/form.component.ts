import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	public form: FormGroup;
	public usuario: Usuario = new Usuario();
	constructor(public usuarioService: UsuarioService,
        public router: Router
    ) {}

	ngOnInit() {
		this.form = new FormGroup({
			name: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
			apellidos: new FormControl('', [Validators.required]),
			edad: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required]),
		});
	}

	onSave() {
		this.usuario.name = this.form.get('name').value;
		this.usuario.apellidos = this.form.get('apellidos').value;
		this.usuario.password = '123456';
		this.usuario.edad = this.form.get('edad').value;
		this.usuario.email = this.form.get('email').value;
		this.usuario.status = 'activo';

		this.usuarioService.create(this.usuario).subscribe((res) => {
			console.log('Creado...');
            this.router.navigate(['/admin'])
		}),
			(error) => {
				console.log(error);
			};
	}
}

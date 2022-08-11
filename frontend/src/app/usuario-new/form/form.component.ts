import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	// @Input() rol: Rol;
	public form: FormGroup;
	public usuario: Usuario = new Usuario();
	public perfil: Perfil = new Perfil();
	public rol: Rol;
	public id_rol: number;
	constructor(
		public route: ActivatedRoute,
		public usuarioService: UsuarioService,
		public perfilService: PerfilService,
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
			rol: new FormControl('', [Validators.required]),
		});
	}

	onSave() {
		// Crear usuario
		this.usuario.name = this.form.get('name').value;
		this.usuario.apellidos = this.form.get('apellidos').value;
		this.usuario.password = '123456';
		this.usuario.edad = this.form.get('edad').value;
		this.usuario.email = this.form.get('email').value;
		this.usuario.status = 'activo';
		this.id_rol = this.form.get('rol').value;
		// seleccionar rol
		this.rol = new Rol();
		this.rol.id = this.id_rol;
        this.rol.status = 'activo';
		// Crear perfil
		this.perfil.status = 'activo';
		this.perfil.usuario = this.usuario;
		this.perfil.rol = this.rol;

		this.usuarioService.create(this.usuario).subscribe((res) => {
            this.perfilService.create(this.perfil).subscribe((res) => {
			console.log('Creado...');
			this.router.navigate(['/admin']);
		})}),(error) => {
				console.log(error);
		};
	}
}

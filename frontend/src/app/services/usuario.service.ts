import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
	providedIn: 'root',
})
export class UsuarioService {
    public url: String = environment.url;
	public usuarios$ = new Subject<Usuario[]>(); 
	public usuario$ = new Subject<Usuario>();

	public usuarios: Usuario[] = [];
	public usuario: Usuario;
	constructor(public http: HttpClient) {}
	all$(): Observable<Usuario[]> {
		return this.usuarios$.asObservable();
	}
    all(): Observable<any> {
		return this.http.get(`${this.url}usuario`).pipe( // <-- URL y pipe es para el error 404
			map((res: any) => {
				this.usuarios = res.data; // recibe la data y lo guarda en la variable usuarios
				this.usuarios$.next(this.usuarios); // envia la data a la variable usuarios$ para que se pueda subscribir en el componente
				return this.usuarios; // retorna la data que esta en la variable usuarios
			}),
			catchError(err => {
				console.log(err);
				return err;
			}),
		);
	}
}


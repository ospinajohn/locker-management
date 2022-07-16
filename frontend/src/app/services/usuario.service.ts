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
    //obtener un solo usuario
    get(id: string): Observable<any> {
        return this.http.post(`${this.url}usuario/`, {id})
        .pipe( // <-- URL y pipe es para el error 404
            map((res: any) => {
                this.usuario = res.data; // recibe la data y lo guarda en la variable usuarios
                this.usuario$.next(this.usuario); // envia la data a la variable usuarios$ para que se pueda subscribir en el componente
                return this.usuario; // retorna la data que esta en la variable usuarios
            }),
            catchError(err => {
                console.log(err);
                return err;
            }),
        );
    }
    //crear un usuario
    create(data: Usuario){
        return this.http.post(`${this.url}usuario/`, data)
        .pipe( // <-- URL y pipe es para el error 404
            map((res: any) => {
                this.usuario = res.data; // recibe la data y lo guarda en la variable usuarios
                this.usuario$.next(this.usuario); // envia la data a la variable usuarios$ para que se pueda subscribir en el componente
                return this.usuario; // retorna la data que esta en la variable usuarios
            }),
            catchError(err => {
                console.log(err);
                return err;
            }),
        );
    }

    //borrar un usuario
    delete(id: any){
        return this.http.delete(this.url +'usuario/'+id)
        .pipe( 
            map((res: any) => {
                console.log('Borrado...');
                this.all();
            }),
            // catchError(err => {
            //     console.log(err);
            //     return err;
            // }),
        );
    }
}


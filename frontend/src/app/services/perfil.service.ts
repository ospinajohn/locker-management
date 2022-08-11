import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from '../models/perfil';
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class PerfilService {
    public url: String = environment.url;
    public perfiles$ = new Subject<Perfil[]>();
    public perfil$ = new Subject<Perfil>();

    public perfiles: Perfil[] = [];
    public perfil: Perfil;
    public usuario: Perfil;
	constructor(public http: HttpClient) {}
    all$(): Observable<Perfil[]> { // observable sirve para que se pueda subscribir en el componente y recibir la data
        return this.perfiles$.asObservable();
    }
    all(): Observable<any> { // observable sirve para que se pueda subscribir en el componente y recibir la data
        return this.http.get(`${this.url}perfil`).pipe( // <-- URL y pipe es para el error 404
            map((res: any) => {
                this.perfiles = res.data; // recibe la data y lo guarda en la variable usuarios
                this.perfiles$.next(this.perfiles); // envia la data a la variable usuarios$ para que se pueda subscribir en el componente
                return this.perfiles; // retorna la data que esta en la variable usuarios
            }),
            catchError(err => {
                console.log(err);
                return err;
            }),
        );
    }
    // Obtener perfil por id
    get(id: number): Observable<any> {
        return this.http.get(`${this.url}perfil/${id}`).pipe(
            map((res: any) => {
                this.perfil = res.data; 
                this.perfil$.next(this.perfil); 
                return this.perfil; 
            }),
            catchError(err => {
                console.log(err);
                return err;
            }),
        );
    }
    //Crear perfil
    create(data: Perfil){
        return this.http.post(`${this.url}perfil/`, data)
        .pipe( 
            map((res: any) => {
                this.perfil = res.data; 
                this.perfil$.next(this.perfil); 
                return this.perfil;
            }),
            catchError(err => {
                console.log(err);
                return err;
            }),
        );
    }



    search(id): Observable<any> {
        return this.http.get(`${this.url}perfil/search/${id}`).pipe(
            map((res: any) => {
                this.perfiles = res.data; // recibe la data y lo guarda en la variable usuarios
                this.perfiles$.next(this.perfiles); // envia la data a la variable usuarios$ para que se pueda subscribir en el componente
                return this.perfiles; // retorna la data que esta en la variable usuarios
            }),
        
        );
    }

}

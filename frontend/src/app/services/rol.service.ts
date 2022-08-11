import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Rol } from '../models/rol';

@Injectable({
	providedIn: 'root',
})
export class RolService {
    public url: String = environment.url;
    public rols$ = new Subject<Rol[]>();
    public rol$ = new Subject<Rol>();

    public rols: Rol[] = [];
    public rol: Rol;
	constructor(public http: HttpClient) {}
    all$(): Observable<Rol[]> { // observable sirve para que se pueda subscribir en el componente y recibir la data
        return this.rols$.asObservable();
    }
    all(): Observable<any> { // observable sirve para que se pueda subscribir en el componente y recibir la data
        return this.http.get(`${this.url}rol`).pipe( // <-- URL y pipe es para el error 404
            map((res: any) => {
                this.rols = res.data;
                this.rols$.next(this.rols);
                return res.data;
            }),
            catchError(err => {
				console.log(err);
				return err;
			}),
        );
    }  
    //Crear rol
    create(data: Rol){
        return this.http.post(`${this.url}rol/`, data)
        .pipe( 
            map((res: any) => {
                this.rol = res.data; 
                this.rol$.next(this.rol); 
                return this.rol;
            }),
            catchError(err => {
                console.log(err);
                return err;
            }),
        );
    }
    // Obtener un rol por id
    get(id: number): Observable<any> {
        return this.http.get(`${this.url}rol/${id}`).pipe(
            map((res: any) => {
                this.rol = res.data;
                this.rol$.next(this.rol);
                return this.rol;
            }),
            catchError(err => {
                console.log(err);
                return err;
            }),
        );
    }

    // buscar rol por id del rol
    search(id): Observable<any> {
        return this.http.get(`${this.url}rol/search/${id}`).pipe(
            map((res: any) => {
                this.rol = res.data;
                this.rol$.next(this.rol);
                return this.rol;
            }),
        
        );
    }

}

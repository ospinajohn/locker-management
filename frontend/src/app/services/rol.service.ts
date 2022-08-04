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
    public rol$ = new Subject<Rol[]>();
    public rol: Rol[] = [];
	constructor(public http: HttpClient) {}
    all$(): Observable<Rol[]> { // observable sirve para que se pueda subscribir en el componente y recibir la data
        return this.rol$.asObservable();
    }
    all(): Observable<any> { // observable sirve para que se pueda subscribir en el componente y recibir la data
        return this.http.get(`${this.url}rol`).pipe( // <-- URL y pipe es para el error 404
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
}

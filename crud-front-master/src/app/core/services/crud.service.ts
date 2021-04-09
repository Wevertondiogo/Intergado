import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { Animal } from "src/app/models/Animal.model";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  urlBase = `http://localhost:5050/api/`;
  urlAnimals = this.urlBase + "animal/";

  constructor(private _http: HttpClient) {}

  public GetAnimals(): Observable<Animal[]> {
    return this._http
      .get<Animal[]>(this.urlAnimals)
      .pipe(retry(2), catchError(this.handleError));
  }

  public AddAnimal(animal: Animal): Observable<Animal> {
    const body = JSON.stringify(animal);
    return this._http
      .post<Animal>(this.urlAnimals, body, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  public DeleteAnimal(id: number) {
    return this._http
      .delete<Animal>(`${this.urlAnimals} ${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(exception: HttpErrorResponse) {
    let errorMessage = "";
    if (exception.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = exception.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${exception.status}
        menssagem: ${exception.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

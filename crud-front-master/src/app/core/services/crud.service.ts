import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { Animal } from "src/app/models/Animal.model";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  urlBase = `http://localhost:5050/api/`;
  urlAnimals = this.urlBase + "animal/";

  constructor(private _http: HttpClient) {}

  public getAnimals(): Observable<Animal> {
    return this._http
      .get<Animal>(this.urlAnimals)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

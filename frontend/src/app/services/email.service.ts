import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private env: string;
  //service,guards e importaciones de otras librerias
  constructor(private _http:HttpClient) {
    this.env=environment.APP_URL;
   }

   sendEmail(email:string){
    return this._http.post<any>(this.env+'user/email',{email: email});
   }
}

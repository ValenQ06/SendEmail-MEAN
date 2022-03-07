import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private env: string;
  //service,guards e importaciones de otras librerias
  constructor(private _http:HttpClient) {
    this.env=environment.APP_URL;
   }

   registerUser(user:any){
    return this._http.post<any>(this.env+'user/register',user);
   }

   loginUser(user:any){
     return this._http.post<any>(this.env+'user/login',user);
   }
/**
 * 
 * @returns true o false.
 */
   loggedIn(){
    return !!localStorage.getItem('token');
   }

/**
 * 
 * @returns Retorna el token de login o registro.
 */
   getToken(){
     return localStorage.getItem('token');
   }

   logOut(){
     localStorage.removeItem('token');
   }
}

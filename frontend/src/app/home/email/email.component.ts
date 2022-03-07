import { Component, OnInit } from '@angular/core';
import { EmailService } from "../../services/email.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  registerLogin: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  vertitalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;

  constructor(
    private _emailService: EmailService,
    private _snackBar: MatSnackBar
  ) {
    this.registerLogin = {};
  }

  sendEmail(email:string){
      this._emailService.sendEmail(email)
      .subscribe({
        next:(v)=>{
          localStorage.setItem("token",v.token);
          this.message ='email sent successfully';
          this.openSnackBarSuccessfull();
        },
        error:(e)=>{
          this.message=e.error.message;
          this.openSnackBarError();
        },
      })
  }

  openSnackBarSuccessfull() {
    this._snackBar.open(this.message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.vertitalPosition,
      duration: this.durationInSeconds,
      panelClass:['styleSnackBarSuccesfull']
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.vertitalPosition,
      duration: this.durationInSeconds,
      panelClass:['styleSnackBarError']
    });
  }


  ngOnInit(): void {
  }

}

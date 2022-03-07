import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  vertitalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;

  constructor(
    private _userService: UserService,
    private _emailService: EmailService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerData = {};
  }

  registerUser() {
    if (
      !this.registerData.name ||
      !this.registerData.email ||
      !this.registerData.password
    ) {
      this.message = 'Incomplete Data';
      this.openSnackBarError();
    } else {
      this._userService.registerUser(this.registerData)
      .subscribe({
        next:(v) =>{
          localStorage.setItem("token",v.token);
          this._router.navigate(['/sendEmail']);
          this.message ='Success Register';
          this.openSnackBarSuccessfull();
          this.sendEmail(this.registerData.email);
        },
        error:(e) =>{
          this.message = e.error.message;
          this.openSnackBarError();
          
        },
      });
    }
  }

  sendEmail(email:string){
    this._emailService.sendEmail(email)
    .subscribe({
      next:(v)=>{
        localStorage.setItem("token",v.token);
        this.message ='email sent successfully';
      },
      error:(e)=>{
        this.message=e.error.message;
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

  ngOnInit(): void {}
}

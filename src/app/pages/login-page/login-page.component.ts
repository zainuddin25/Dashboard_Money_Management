import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  type: string = 'password'
  username: string = ''
  password: string = ''

  showPassword() {
    if (this.type == 'password') {
      this.type = 'text'
    } else {
      this.type = 'password'
    }
  }

  changeUsername(event: any) {
    this.username = event.target.value
  }

  changePassword(event: any) {
    this.password = event.target.value
  }

  login() {
    this.http.post<any>('http://localhost:3222/auth/login', {
      username: this.username,
      password: this.password
    })
    .pipe(
      catchError(error => {
        Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: error.error.message,
          showConfirmButton: false,
          timer: 1500
        })
        return of(error)
      })
    )
    .subscribe(
      (response) => {
        localStorage.setItem('accessToken', response.accessToken)
        const decode: any = jwt_decode(response.accessToken)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Welcome ' + decode.username,
          showConfirmButton: false,
          timer: 1500,
        })
        this.router.navigate(['/dashboard'])
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData:any
  constructor(private Authservice:AuthService,private router:Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  forgetPass(){
    this.router.navigate(['/forget'])

  }
  goback(){
    this.router.navigate(['/home'])
  }
  onSubmit(){

    if(this.formData.status=='VALID'){
      this.Authservice.login(this.formData.value).subscribe((res:any)=>{
        console.log('rsult',res)
        localStorage.setItem("auth", res.token);
        this.router.navigate(['/dashboard'])
      },error => Swal.fire({title: "email ou mot de passe erroné", icon: "error"}))
    }else{
      Swal.fire({title: "not a valid data please try again", icon: "error"})

    }

  }
  goregister(){
    this.router.navigate(['/register'])

  }
}


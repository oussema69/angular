import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgetPassword',
  templateUrl: './forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router:Router,private Authservice:AuthService ) { }
  formData:any
  ngOnInit() {
    this.formData = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(){
    if(this.formData.status=='VALID'){
      this.Authservice.forget(this.formData.value).subscribe((res:any)=>{
       console.log(res)
      },error => Swal.fire({title: "oops server error", icon: "error"}))
    }else{
      Swal.fire({title: "not a valid data please try again", icon: "error"})

    }
  }
  goregister(){
    this.router.navigate(['/register'])

  }
  gologin(){
    this.router.navigate(['/login'])

  }
}

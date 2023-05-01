import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData:any;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  onSubmit(){
    if(this.formData.status=='VALID'){
      this.authService.register(this.formData.value).subscribe((res:any)=>{
        Swal.fire({title: "Congratulation your are know registred", icon:"success"})
        this.router.navigate(['/login'])

      },error => Swal.fire({title: "oops theris a serval error", icon: "error"}))
    }else{
      Swal.fire({title: "not a valid data please try again", icon: "error"})
    }
  }
  goback(){
    this.router.navigate(['/home'])
  }

}

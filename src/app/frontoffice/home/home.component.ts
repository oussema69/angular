import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
goLogin(){
  this.router.navigate(['login'])
  console.log('hhhhhhhhhhhhhhhh')
}
goregister(){
  this.router.navigate(['/register'])

}
}

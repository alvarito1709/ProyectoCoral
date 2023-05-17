import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/servicios/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: string = '';
  password: string = '';
  nombre: string = '';

  constructor( private formB:FormBuilder, private data:DataServiceService, 
    private router:Router) { 
    this.form = this.formB.group({
      user:['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  get User(){
    return this.form.get('user');
  }



  submit(event:Event){
    event.preventDefault;
     
    if(this.form.valid){
      // el servicio para mostrar el nombre es dataService
      this.nombre = this.user;
      this.data._nombre = this.nombre;
      this.router.navigate(['']);
    }
    else{
      this.form.markAllAsTouched();
    }
  }

}

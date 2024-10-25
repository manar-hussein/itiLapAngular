import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  IsSuccess:boolean = false;
  UserForm = new FormGroup({
    name:new FormControl(null ,[Validators.required ,Validators.minLength(3)]),
    age: new FormControl(null , [Validators.required , Validators.min(20) , Validators.max(40)]),
    email: new FormControl(null , [Validators.required , Validators.email])
  });

  get Name(){
    return this.UserForm.controls['name'];
  }
  get Age()
  {
    return this.UserForm.controls['age'];
  }
  get Email()
  {
    return this.UserForm.controls['email'];
  }

  AddUser()
  {
    this.IsSuccess = true;
  }
}

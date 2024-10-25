import { Component } from '@angular/core';
import { RegistertiontComponent } from "../registertiont/registertiont.component";
import { StudentsComponent } from "../students/students.component";
import { Student } from '../../Types/Student';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RegistertiontComponent, StudentsComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
 Students:Student[] =[];
  ShowStudent(Students:Student[])
  {
     this.Students = Students
  }
}

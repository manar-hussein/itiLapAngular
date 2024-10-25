import { Component, Directive, EventEmitter, Output, output } from '@angular/core';
import { Student } from '../../Types/Student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registertiont',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './registertiont.component.html',
  styleUrl: './registertiont.component.css'
})
export class RegistertiontComponent {
  Students :Student[] =[];
  student:Student = {} as Student
  @Output() UpdateStudentEvent = new EventEmitter<any>()

  AddStudent()
  {
      this.Students.push(this.student);
      this.FireEvent(this.Students);
  }
 FireEvent(Students:any)
  {
    this.UpdateStudentEvent.emit(Students);
  }

}

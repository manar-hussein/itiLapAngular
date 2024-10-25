import { Component, Input } from '@angular/core';
import { Student } from '../../Types/Student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  @Input() Students :Student[] =[];
}

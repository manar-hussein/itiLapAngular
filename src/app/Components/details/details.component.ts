import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  userId:number = 0;

  constructor(_router:ActivatedRoute) {

    this.userId = _router.snapshot.params['id']
  }
}

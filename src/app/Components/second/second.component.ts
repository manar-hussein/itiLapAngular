import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  currentIndex:number = 0;
  NextDisabled:boolean=false;
  PreviousDisabled:boolean=true;
  interval:any;
   PicsArray:string[] =
  [
    '/Images/work-1.jpg',
    '/Images/work-2.jpg',
    '/Images/work-3.jpg',
    '/Images/work-4.jpg',
    '/Images/work-5.jpg',
    '/Images/work-6.jpg',
  ];
  next()
  {
    this.PreviousDisabled = false;
    if(this.currentIndex == this.PicsArray.length-2 )
    {
      this.NextDisabled = true;
    }
    this.currentIndex++;
    console.log(this.currentIndex);
  }

  Previous()
  {
    this.NextDisabled = false;
    if(this.currentIndex > 0)
    {
      this.PreviousDisabled = false;
      this.currentIndex--;
    }
    else
    {

      this.PreviousDisabled = true;
      this.NextDisabled = false;
    }

  }

  Slide()
  {
    this.interval = setInterval(()=>
    {
      if(this.currentIndex >= 0 && this.currentIndex< this.PicsArray.length-1)
      {
         this.currentIndex++;
      }else
      {
        this.currentIndex = 0;
      }
    },1000)
  }

  Stop()
  {
      clearInterval(this.interval);
      if(this.currentIndex > 0 && this.currentIndex < this.PicsArray.length-1)
      {
        this.NextDisabled = false;
        this.PreviousDisabled = false;
      }else if(this.currentIndex == this.PicsArray.length-1)
      {
        this.NextDisabled = true;
        this.PreviousDisabled = false;
      }else
      {
        this.PreviousDisabled = true;
        this.NextDisabled = false;
      }
  }
}


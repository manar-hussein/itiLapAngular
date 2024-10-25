import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./Components/first/first.component";
import { SecondComponent } from "./Components/second/second.component";
import { ParentComponent } from "./Components/parent/parent.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { HomeComponent } from "./Components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent, ParentComponent, NavBarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProject';
}

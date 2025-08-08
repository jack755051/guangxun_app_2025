import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breadcrumb } from "@sanring/gx-breadcrumb";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Breadcrumb],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}

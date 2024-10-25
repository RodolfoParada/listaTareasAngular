import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteForComponent } from './componente-for/componente-for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista de Tareas en Angular';
}

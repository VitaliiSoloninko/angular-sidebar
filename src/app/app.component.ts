import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MainComponent } from './main/main.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, SidebarComponent, MainComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	isSidebarSmall = signal<boolean>(true)
}

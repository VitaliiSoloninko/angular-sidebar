import { Component, HostListener, signal } from '@angular/core'
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
	isSidebarSmall = signal<boolean>(false)
	screenWidth = signal<number>(window.innerWidth)

	@HostListener('window:resize')
	onResize() {
		this.screenWidth.set(window.innerWidth)
		if (this.screenWidth() < 768) {
			this.isSidebarSmall.set(true)
		}
	}

	changeSidebar(isSidebarSmall: boolean): void {
		this.isSidebarSmall.set(isSidebarSmall)
	}
}

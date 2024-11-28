import { CommonModule } from '@angular/common'
import { Component, input, output } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
	isSidebarSmall = input.required<boolean>()
	changeSidebarState = output<boolean>()

	menuItems = [
		{
			routerLink: 'dashboard',
			icon: 'fal fa-home',
			linkText: 'Dashboard',
		},
		{
			routerLink: 'products',
			icon: 'fal fa-box-open',
			linkText: 'Products',
		},
		{
			routerLink: 'pages',
			icon: 'fal fa-file',
			linkText: 'Pages',
		},
		{
			routerLink: 'settings',
			icon: 'fal fa-cog',
			linkText: 'Settings',
		},
	]

	toggleSidebarLogo(): void {
		this.changeSidebarState.emit(!this.isSidebarSmall())
	}
}

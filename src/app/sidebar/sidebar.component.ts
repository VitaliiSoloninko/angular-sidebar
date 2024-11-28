import { Component } from '@angular/core'
import { RouterLinkActive, RouterModule } from '@angular/router'

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterModule, RouterLinkActive],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
	menuItems = [
		{
			routerLink: 'dashboard',
			icon: 'fal fa-home',
			label: 'Dashboard',
		},
		{
			routerLink: 'products',
			icon: 'fal fa-box-open',
			label: 'Products',
		},
		{
			routerLink: 'pages',
			icon: 'fal fa-file',
			label: 'Pages',
		},
		{
			routerLink: 'settings',
			icon: 'fal fa-cog',
			label: 'Settings',
		},
	]
}

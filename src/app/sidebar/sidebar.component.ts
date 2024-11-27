import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
	menuItems = [
		{
			RouterLink: 'dashboard',
			icon: 'fal fa-home',
			label: 'Dashboard',
		},
		{
			RouterLink: 'products',
			icon: 'fal fa-box-open',
			label: 'Products',
		},
		{
			RouterLink: 'pages',
			icon: 'fal fa-file',
			label: 'Pages',
		},
		{
			RouterLink: 'settings',
			icon: 'fal fa-cog',
			label: 'Settings',
		},
	]
}

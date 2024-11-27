import { Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PagesComponent } from './pages/pages.component'
import { ProductsComponent } from './products/products.component'
import { SettingsComponent } from './settings/settings.component'

export const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'pages', component: PagesComponent },
	{ path: 'settings', component: SettingsComponent },
]

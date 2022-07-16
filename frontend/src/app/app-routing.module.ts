import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then((m) => m.HomePageModule),
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'usuario-new',
    loadChildren: () => import('./usuario-new/usuario-new.module').then( m => m.UsuarioNewPageModule)
  },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

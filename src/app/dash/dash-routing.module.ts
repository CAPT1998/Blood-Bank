import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashPage } from './dash.page';

const routes: Routes = [
  {
    path: '',
    component: DashPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },

      {
        path: '',
        redirectTo: '/dash/home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashPageRoutingModule {}

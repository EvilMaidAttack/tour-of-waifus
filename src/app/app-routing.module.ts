import { WaifuDetailComponent } from './waifu-detail/waifu-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WaifusComponent } from './waifus/waifus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path: 'waifus', component: WaifusComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'detail/:id', component: WaifuDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

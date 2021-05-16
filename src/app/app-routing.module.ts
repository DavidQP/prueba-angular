import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCreateComponent } from './component/dashboard-create/dashboard-create.component';
import { DashboardListComponent } from './component/dashboard-list/dashboard-list.component';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductCreateComponent},
  { path: 'dashboards', component: DashboardListComponent},
  { path: 'dashboards/create', component: DashboardCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

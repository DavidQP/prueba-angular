import { Component, OnInit } from '@angular/core';
import  { DashboardService} from './../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-create',
  templateUrl: './dashboard-create.component.html',
  styleUrls: ['./dashboard-create.component.css']
})
export class DashboardCreateComponent implements OnInit {

  warningMessage: string = 'Es posible que todos los productos no puedan subir debido a las restricciones de la aplicación, por favor espere a que cargue la tabla ...';
  successMessage: string = 'La información ha sido cargada por favor verifique en el Inicio de la página';
  alertWarning: boolean = false;
  alertSuccess: boolean = false;
  kpi_loaded: boolean = false;
  table_loaded: boolean = false;
  productList: any[] = [];
  kpi: {
    'total': 0,
    'uploaded': 0,
    'not_uploaded': 0
  }

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.load().subscribe(rest => {
      console.log(rest);
    })
  }

  loadProducts():void{
    this.alertWarning = true;
    //this.warningMessage = 'Es posible que todos los productos no puedan subir debido a las restricciones de la aplicación, por favor espere ...';
    this.dashboardService.create().subscribe(res => {
      this.productList = res.products;
      this.table_loaded = true;
      this.kpi = res.kpi;
      this.kpi_loaded = true;
      console.log(this.productList);
    });
  }

}

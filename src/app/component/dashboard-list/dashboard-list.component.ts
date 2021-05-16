import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  dashboardList: any[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAll().subscribe(rest => {
      this.dashboardList = rest;
      this.dashboardList.forEach(dashboard => {
        let time = new Date(dashboard.created_at)
        dashboard.created_at = `${time.getFullYear()}/${time.getMonth()+1}/${time.getDate()} Hora: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}` ;
      });
      //let time = new Date(this.dashboardList[0]['created_at']);
      //console.log(rest);
    })
  }

}

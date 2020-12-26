import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    let myChart = new Chart("myChart", {
      type: 'polarArea',
      data: {
        datasets: [{
          data: [1, 2, 2],
          backgroundColor: [
            'rgb(255,53,71)',
            'rgb(9,128,255)',
            'rgb(255,193,8)',
          ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Воротников Григорий',
          'Иванов Иван',
          'Петров Петр'
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Заказы'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }

}

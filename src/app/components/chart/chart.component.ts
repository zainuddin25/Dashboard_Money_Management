import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
	       datasets: [
          {
            label: "Income",
            data: ['542000', '542000', '536000', '327000', '17000',
									 '231000', '538000', '54100', '343000', '565000', '435000', '123000'],
            backgroundColor: 'limegreen'
          },
          {
            label: "Loss",
            data: ['100000','69000', '192000', '82000', '92000',
								 '574000', '573000', '576000', '123000', '43500', '323423', '324532'],
            backgroundColor: '#ff584d'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {
  dataList: any = [
    {
      icon: 'wallet.png',
      title: 'Total Balance',
      nominal: '753.010',
      status: 'profit',
      total: '12%',
      colorBackground: '#fff2e5',
    },
    {
      icon: 'profit.png',
      title: 'Total Balance',
      nominal: '753.010',
      status: 'profit',
      total: '12%',
      colorBackground: '#ffdff6',
    },
    {
      icon: 'expenditure.png',
      title: 'Total Balance',
      nominal: '753.010',
      status: 'profit',
      total: '12%',
      colorBackground: '#ffebea',
    }
  ]
}

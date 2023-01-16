import { Component } from '@angular/core';

@Component({
  selector: 'app-piggy-bank',
  templateUrl: './piggy-bank.component.html',
  styleUrls: ['./piggy-bank.component.css']
})
export class PiggyBankComponent {
  pigyBank : any = [
    {
      wish: 'Pengen Beli Rumah',
      target: '100.000',
      inBank: '100.000',
      value: '50'
    },
    {
      wish: 'Pengen Beli Rumah',
      target: '100.000',
      inBank: '100.000',
      value: '50'
    },
    {
      wish: 'Pengen Beli Rumah',
      target: '100.000',
      inBank: '100.000',
      value: '50'
    },
  ]
}

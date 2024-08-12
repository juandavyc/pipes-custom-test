import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';


@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  //i18n select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeCLient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n plural

  public clients: string[] = ["maria", "pedro", "jose", "camila", "pepe", "joe", "iris", "sam", "miranda"];
  public clientsMap = {
    '=0': 'ningun cliente esperando',
    '=1': 'un cliente esperando',
    '=2': 'tenemos 2 personas esperando...',
    'other': 'tenemos # personas esperando...'
  }

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue pipe

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottowa, Canada'
  }

  // observable

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value =>{
      console.log('tap', value)
    })
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('tenemos la promesa');
    }, 3500)
  });

}

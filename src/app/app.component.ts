import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acceuil', url: '/', icon: 'home' },
    { title: 'Films les plus populaires', url: '/films', icon: 'heart' },
  ];
  constructor(){}
}

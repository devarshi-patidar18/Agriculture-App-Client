import { Component } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-message-app',
  standalone: true,
  imports: [],
  templateUrl: './message-app.component.html',
  styleUrl: './message-app.component.css'
})
export class MessageAppComponent {

  constructor(private dataStore:DataStoreService){}

  ngOnInit(){
    this.dataStore.activeFooterIconNumber=4;
  }

}

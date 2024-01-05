import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-data-model',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './data-model.component.html',
  styleUrl: './data-model.component.scss'
})
export class DataModelComponent {

}

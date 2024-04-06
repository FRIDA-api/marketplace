import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-overview-tab',
  standalone: true,
    imports: [
        NgOptimizedImage,
        TranslateModule
    ],
  templateUrl: './overview-tab.component.html',
  styleUrl: './overview-tab.component.scss'
})
export class OverviewTabComponent {

}

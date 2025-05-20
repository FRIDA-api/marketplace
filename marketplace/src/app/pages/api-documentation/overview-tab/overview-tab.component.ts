import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import {ApiInformationModel} from "@common/models/api-information.model";

@Component({
    selector: 'app-overview-tab',
    imports: [
        NgOptimizedImage,
        TranslateModule
    ],
    templateUrl: './overview-tab.component.html',
    styleUrl: './overview-tab.component.scss'
})
export class OverviewTabComponent {

  @Input() apiInformation!: ApiInformationModel;
}

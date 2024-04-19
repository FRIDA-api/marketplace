import {CommonModule, NgOptimizedImage} from '@angular/common';

import {
  Component,
  Input,
  inject, OnInit
} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {RouterModule} from '@angular/router';

import {MatTabChangeEvent, MatTabsModule} from "@angular/material/tabs";
import {OverviewTabComponent} from "./overview-tab/overview-tab.component";
import {TranslateModule} from "@ngx-translate/core";
import {DocumentationTabComponent} from "./documentation-tab/documentation-tab.component";
import {TagsApiService} from "@common/services/tags-api.service";
import {UseCaseApiService} from "@common/services/use-case-api.service";
import {ApiInformationModel} from "@common/models/api-information.model";
import {TagModel} from "@common/models/tag.model";

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule, MatTabsModule, OverviewTabComponent, NgOptimizedImage, TranslateModule, DocumentationTabComponent],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent implements OnInit {
  @Input() apiPathParameter: string | undefined;

  private readonly useCasesApi = inject(UseCaseApiService);
  private readonly tagsApi = inject(TagsApiService)

  apiInformation: ApiInformationModel | undefined;
  tags: TagModel[] | undefined;

  isApiDocumentationTabActive = false;

  ngOnInit() {
    this.apiInformation = this.useCasesApi.getUseCaseInformation().find(api => api.id === this.apiPathParameter);
    this.tags = this.tagsApi.getTagInformation().filter(tag => this.apiInformation!.tags.includes(tag.id));
  }

  onTabChange(event: MatTabChangeEvent) {
    this.isApiDocumentationTabActive = event.index === 1;
  }
}

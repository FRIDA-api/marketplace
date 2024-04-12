import {CommonModule, NgOptimizedImage} from '@angular/common';

import {
  Component,
  Input,
  inject
} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {RouterModule} from '@angular/router';

import {MatTabChangeEvent, MatTabsModule} from "@angular/material/tabs";
import {OverviewTabComponent} from "./overview-tab/overview-tab.component";
import {TranslateModule} from "@ngx-translate/core";
import {DocumentationTabComponent} from "./documentation-tab/documentation-tab.component";
import {TagsApiService} from "@common/services/tags-api.service";
import {UseCaseApiService} from "@common/services/use-case-api.service";

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule, MatTabsModule, OverviewTabComponent, NgOptimizedImage, TranslateModule, DocumentationTabComponent],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent {
  @Input() apiPathParameter: string | undefined;

  private readonly useCasesApi = inject(UseCaseApiService);
  private readonly tagsApi = inject(TagsApiService)

  apiInformation = this.useCasesApi.getUseCaseInformation().find(api => api.id === this.apiPathParameter)!;
  tags = this.tagsApi.getTagInformation().filter(tag => this.apiInformation.tags.includes(tag.id));

  isApiDocumentationTabActive = false;

  onTabChange(event: MatTabChangeEvent) {
    this.isApiDocumentationTabActive = event.index === 1;
  }
}

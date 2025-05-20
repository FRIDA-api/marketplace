import { CommonModule, NgOptimizedImage } from '@angular/common';

import { Component, Input, inject, OnInit, OnDestroy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';

import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { OverviewTabComponent } from './overview-tab/overview-tab.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DocumentationTabComponent } from './documentation-tab/documentation-tab.component';
import { TagsApiService } from '@common/services/tags-api.service';
import { UseCaseApiService } from '@common/services/use-case-api.service';
import { ApiInformationModel } from '@common/models/api-information.model';
import { TagModel } from '@common/models/tag.model';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-api-documentation',
    imports: [
        CommonModule,
        MatExpansionModule,
        RouterModule,
        MatTabsModule,
        OverviewTabComponent,
        NgOptimizedImage,
        TranslateModule,
        DocumentationTabComponent,
    ],
    templateUrl: './api-documentation.component.html',
    styleUrl: './api-documentation.component.scss'
})
export class ApiDocumentationComponent implements OnInit, OnDestroy {
  @Input() apiPathParameter: string | undefined;

  private readonly useCasesApi = inject(UseCaseApiService);
  private readonly tagsApi = inject(TagsApiService);
  private readonly titleService = inject(Title);
  private readonly translate = inject(TranslateService);

  private readonly router = inject(Router);

  apiInformation: ApiInformationModel | undefined;
  tags: TagModel[] | undefined;
  private subs = new Subscription();

  isApiDocumentationTabActive = false;

  ngOnInit() {
    this.apiInformation = this.useCasesApi
      .getUseCaseInformation()
      .find((api) => api.id === this.apiPathParameter);
    if (this.apiInformation === undefined) {
      this.router.navigateByUrl('');
      return;
    }

    this.tags = this.tagsApi
      .getTagInformation()
      .filter((tag) => this.apiInformation!.tags.includes(tag.id));

    this.subs.add(
      this.translate
        .get('API_OVERVIEW.' + this.apiInformation.languageKey + '.HEADLINE')
        .subscribe((translation: string) => {
          this.titleService.setTitle(
            `API Documentation ${translation} - Marketplace - FRIDA`
          );
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onTabChange(event: MatTabChangeEvent) {
    this.isApiDocumentationTabActive = event.index === 1;
  }
}

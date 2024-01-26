import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';

import {
  Component,
  Input,
  OnChanges,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';
import { ApiDataService, CompanyInformation } from '@common/services/api-data.service';
import { Observable } from 'rxjs';

import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent implements OnChanges {
  
  //This parameter comes from the router path
  @Input() apiPathParameter: string | undefined;
  
  private document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly dataService = inject(ApiDataService);

  companyInformation: Observable<CompanyInformation[]> = this.dataService.getApiDocumentation();
  
  selectApi(apiUrl: string) {
    this.router.navigateByUrl(`/api-explorer/${apiUrl}`);
  }

  ngOnChanges(): void {
    if (isPlatformBrowser(this.platformId)) {
      SwaggerUI({
        url: '/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml',
        //url: '/assets/api/FRIDA_CAR_OA3_full.en.yaml',
        domNode: this.document.getElementById('swagger-ui'),
        deepLinking: true,
        defaultModelsExpandDepth: 4,
        defaultModelExpandDepth: 4,
        syntaxHighlight: {
          activate: true,
          theme: 'tomorrow-night',
        },
      });
    }
  }
}

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

import SwaggerUI from 'swagger-ui';

type Api = {
  name: string;
  url: string;
};
type Category = {
  categoryName: string;
  apis: Api[];
};
type CompanyInformation = {
  companyName: string;
  categories: Category[];
};

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class ApiDocumentationComponent implements OnChanges {
  //This parameter comes from the router path
  @Input() apiPathParameter!: string;
  private document = inject(DOCUMENT);

  companyInformation: CompanyInformation[] = [
    {
      companyName: 'FRIDA',
      categories: [
        {
          categoryName: 'Pension',
          apis: [
            {
              name: 'Get pension API',
              url: 'pension-api',
            },
            {
              name: 'Get more pension API',
              url: 'pension-api',
            },
          ],
        },
        {
          categoryName: 'Health Care',
          apis: [
            {
              name: 'Get health care API',
              url: 'health-care-api',
            },
            {
              name: 'Get more health care API',
              url: 'health-care-api',
            },
          ],
        },
        {
          categoryName: 'Car',
          apis: [
            {
              name: 'Get car API',
              url: 'car-claims-api',
            },
            {
              name: 'Get more car API',
              url: 'car-claims-api',
            },
          ],
        },
        {
          categoryName: 'Cyber',
          apis: [
            {
              name: 'Get cyber API',
              url: 'cyber-api',
            },
            {
              name: 'Get more cyber API',
              url: 'cyber-api',
            },
          ],
        },
        {
          categoryName: 'Document',
          apis: [
            {
              name: 'Get document API',
              url: 'document-api',
            },
            {
              name: 'Get more document API',
              url: 'document-api',
            },
          ],
        },
        {
          categoryName: 'Building',
          apis: [
            {
              name: 'Get building API',
              url: 'building-api',
            },
            {
              name: 'Get more building API',
              url: 'building-api',
            },
          ],
        },
      ],
    },
    {
      companyName: 'HDI',
      categories: [
        {
          categoryName: 'Pension',
          apis: [
            {
              name: 'Get pension API',
              url: '',
            },
            {
              name: 'Get more pension API',
              url: '',
            },
          ],
        },
        {
          categoryName: 'Car',
          apis: [
            {
              name: 'Get car API',
              url: '',
            },
            {
              name: 'Get more car API',
              url: '',
            },
          ],
        },
        {
          categoryName: 'Freedom',
          apis: [
            {
              name: 'Get freedom API',
              url: '',
            },
            {
              name: 'Get more freedom API',
              url: '',
            },
          ],
        },
      ],
    },
    {
      companyName: 'GetSafe',
      categories: [
        {
          categoryName: 'Pension',
          apis: [
            {
              name: 'Get pension API',
              url: '',
            },
            {
              name: 'Get more pension API',
              url: '',
            },
          ],
        },
        {
          categoryName: 'Car',
          apis: [
            {
              name: 'Get car API',
              url: '',
            },
            {
              name: 'Get more car API',
              url: '',
            },
          ],
        },
        {
          categoryName: 'Freedom',
          apis: [
            {
              name: 'Get freedom API',
              url: 'car',
            },
            {
              name: 'Get more freedom API',
              url: '',
            },
          ],
        },
      ],
    },
  ];

  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  selectApi(apiUrl: string) {
    this.router.navigateByUrl(`/api-explorer/${apiUrl}`);
  }

  ngOnChanges(): void {
    console.log(this.apiPathParameter);
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

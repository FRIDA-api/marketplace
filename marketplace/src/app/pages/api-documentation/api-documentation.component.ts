import { CommonModule, DOCUMENT } from '@angular/common';

import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import SwaggerUI from 'swagger-ui';

type Api = {
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
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent implements AfterViewInit {
  //This parameter comes from the router path
  @Input() apiPathParameter!: string;
  private document = inject(DOCUMENT);

  public companies: CompanyInformation[] = [1, 2, 3, 4, 5].map((index) => {
    let api = {
      companyName: 'HDI' + index,
      categories: [
        { categoryName: 'PensionApi' + index, apis: [{ url: 'test' + index }] },
        {
          categoryName: 'PensionApi' + +index * 2,
          apis: [{ url: 'test' + index }],
        },
      ],
    };
    return api;
  });

  public panelOpenState = false;
  ngAfterViewInit(): void {
    console.log(this.apiPathParameter);
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

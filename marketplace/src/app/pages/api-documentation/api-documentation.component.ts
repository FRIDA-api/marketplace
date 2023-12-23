import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, ViewChild, inject,  } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, filter, tap } from 'rxjs';
import  SwaggerUI  from "swagger-ui"
import SwaggerUIPlugin from "swagger-ui"

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent implements OnInit{

  //This parameter comes from the router path
  @Input() apiPathParameter!: string;
  private document = inject(DOCUMENT)
  
  ngOnInit(): void {
      SwaggerUI({
        url: '/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml',
        domNode: this.document.getElementById('swagger-ui')
      });

  }
}

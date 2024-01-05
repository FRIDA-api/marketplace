import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiDataService } from '@common/services/api-data.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiStatusComponent } from '@common/components/api-status/api-status.component';
import { MatIconModule } from '@angular/material/icon';
import {DownloadComponent} from "./download/download.component";
import {CommentService} from "./services/comment.service";
import {CommentComponent} from "./comment/comment.component";
@Component({
  selector: 'app-api-matrix',
  standalone: true,
  imports: [
    CommonModule,
    ApiStatusComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    DownloadComponent,
    CommentComponent,
  ],
  templateUrl: './api-matrix.component.html',
  styleUrl: './api-matrix.component.scss',
})
export class ApiMatrixComponent {
  private apiInformationService = inject(ApiDataService);

  public matrixData$ = this.apiInformationService.getApiMatrixData();
  columnsToDisplay = [
    'FRIDA Member',
    'PensionAPI',
    'CarsClaimsAPI',
    'CyberAPI',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any;
}

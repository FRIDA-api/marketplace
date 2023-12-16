import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiDataService } from '@common/services/api-data.service';

@Component({
  selector: 'app-api-matrix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-matrix.component.html',
  styleUrl: './api-matrix.component.scss',
})
export class ApiMatrixComponent {
  private apiInformationService = inject(ApiDataService);

  public matrixData$ = this.apiInformationService.getApiMatrixData();
}

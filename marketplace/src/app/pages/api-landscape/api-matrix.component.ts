import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiDataService } from '@common/services/api-data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-api-matrix',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
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

import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-accessibility-statement',
  standalone: true,
    imports: [
        TranslateModule
    ],
  templateUrl: './accessibility-statement.component.html',
  styleUrl: './accessibility-statement.component.scss'
})
export class AccessibilityStatementComponent {

}

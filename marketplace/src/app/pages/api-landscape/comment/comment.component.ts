import {Component, Input} from '@angular/core';
import {CommentModel} from "../models/comment.model";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {

  @Input() input?: CommentModel | null;

}

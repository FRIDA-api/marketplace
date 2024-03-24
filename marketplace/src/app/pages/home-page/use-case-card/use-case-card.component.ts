import { Component, effect, input } from '@angular/core';
import { ApiInformationModel } from "@common/models/api-information.model";
import { TagModel } from "@common/models/tag.model";
import { NgOptimizedImage } from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-use-case-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './use-case-card.component.html',
  styleUrl: './use-case-card.component.scss'
})
export class UseCaseCardComponent {

  apiData = input.required<ApiInformationModel>();
  tagsData = input.required<TagModel[] | null>();

  calculatedTagsData: (TagModel | undefined)[] = [];

  constructor() {
    effect(() => {
      this.apiData().tags.forEach((tagId) => {
        this.calculatedTagsData.push(
          this.tagsData()?.find((tagModel) => tagModel.tagId === tagId)
        )
      })
    });
  }
}

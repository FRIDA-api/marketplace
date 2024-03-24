import { Component, computed, input, Signal } from '@angular/core';
import { ApiInformationModel } from "@common/models/api-information.model";
import { TagModel } from "@common/models/tag.model";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";

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
  tagsData = input.required({ transform: (value: TagModel[] | null) => value === null ? [] : value });

  tagComputed: Signal<TagModel[]> = computed(() => this.tagsData().filter((tag) => this.apiData().tags.includes(tag.tagId)));
}

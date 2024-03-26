import {Component, computed, inject, input, Signal} from '@angular/core';
import { ApiInformationModel } from "@common/models/api-information.model";
import { TagModel } from "@common/models/tag.model";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import {Translate} from "@common/pipes/translate.pipe";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-use-case-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    Translate
  ],
  templateUrl: './use-case-card.component.html',
  styleUrl: './use-case-card.component.scss'
})
export class UseCaseCardComponent {

  protected readonly translate = inject(TranslateService);

  apiData = input.required<ApiInformationModel>();
  tagsData = input.required({ transform: (value: TagModel[] | null) => value === null ? [] : value });

  tagComputed: Signal<TagModel[]> = computed(() => this.tagsData().filter((tag) => this.apiData().tags.includes(tag.tagId)));
}

import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, input, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiInformationModel } from '@common/models/api-information.model';
import { TagModel } from '@common/models/tag.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-use-case-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, TranslateModule],
  templateUrl: './use-case-card.component.html',
  styleUrl: './use-case-card.component.scss',
})
export class UseCaseCardComponent {
  protected readonly translate = inject(TranslateService);

  apiData = input.required<ApiInformationModel>();
  tagsData = input.required<TagModel[]>();

  tagComputed: Signal<TagModel[]> = computed(() =>
    this.tagsData().filter((tag) => this.apiData().tags.includes(tag.id))
  );
}

import { Component, inject, computed, input } from '@angular/core';
import { Profile } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { ScrollText } from '../../shared/scroll-text/scroll-text';
import { SectionHead } from '../../shared/section-head/section-head';
import { SectionSpyDirective } from '../../shared/section-spy.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, ScrollText, SectionHead, SectionSpyDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly profile = input.required<Profile>();
  protected readonly t = inject(LanguageService).t;

  protected readonly lead = computed(() => this.profile().about[0]);
  protected readonly rest = computed(() => this.profile().about.slice(1));
}

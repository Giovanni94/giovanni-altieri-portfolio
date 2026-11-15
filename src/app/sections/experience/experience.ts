import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Experience as ExperienceItem } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHead } from '../../shared/section-head/section-head';
import { SectionSpyDirective } from '../../shared/section-spy.directive';

@Component({
  selector: 'app-experience',
  imports: [DatePipe, RevealDirective, SectionHead, SectionSpyDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly experiences = input.required<ExperienceItem[]>();
  protected readonly t = inject(LanguageService).t;
}

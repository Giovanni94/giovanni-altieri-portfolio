import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Education as EducationItem } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHead } from '../../shared/section-head/section-head';
import { SectionSpyDirective } from '../../shared/section-spy.directive';

@Component({
  selector: 'app-education',
  imports: [DatePipe, RevealDirective, SectionHead, SectionSpyDirective],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  readonly items = input.required<EducationItem[]>();
  protected readonly t = inject(LanguageService).t;
}

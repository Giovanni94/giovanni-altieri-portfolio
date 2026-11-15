import { Component, inject, input } from '@angular/core';
import { SkillGroup } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHead } from '../../shared/section-head/section-head';
import { SectionSpyDirective } from '../../shared/section-spy.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective, SectionHead, SectionSpyDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly groups = input.required<SkillGroup[]>();
  protected readonly t = inject(LanguageService).t;
}

import { Component, inject, input } from '@angular/core';
import { Project } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHead } from '../../shared/section-head/section-head';
import { SectionSpyDirective } from '../../shared/section-spy.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, SectionHead, SectionSpyDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects = input.required<Project[]>();
  protected readonly t = inject(LanguageService).t;
}

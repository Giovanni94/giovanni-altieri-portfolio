import { Component, inject, computed, input } from '@angular/core';
import { ContactLink } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { ScrollText } from '../../shared/scroll-text/scroll-text';
import { SectionSpyDirective } from '../../shared/section-spy.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, ScrollText, SectionSpyDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly links = input.required<ContactLink[]>();
  protected readonly t = inject(LanguageService).t;

  protected readonly primary = computed(() => this.links().find((link) => link.primary));
  protected readonly others = computed(() => this.links().filter((link) => !link.primary));
}

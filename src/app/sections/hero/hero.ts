import { Component, computed, inject, input } from '@angular/core';
import { ContactLink, Profile } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly profile = input.required<Profile>();
  readonly primaryContact = input<ContactLink>();

  private readonly scroll = inject(ScrollService);
  protected readonly t = inject(LanguageService).t;

  // 0 in cima alla pagina, 1 dopo un'altezza di schermo: guida la dissolvenza della hero
  protected readonly progress = computed(() => Math.min(1, this.scroll.y() / window.innerHeight));

  protected goTo(event: Event, id: string): void {
    event.preventDefault();
    this.scroll.scrollTo(id);
  }
}

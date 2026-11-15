import { Component, DOCUMENT, computed, effect, inject, input, signal } from '@angular/core';
import { ContactLink } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';
import { NAV_ITEMS } from '../../shared/nav-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  readonly contacts = input<ContactLink[]>([]);

  protected readonly scroll = inject(ScrollService);
  protected readonly themeService = inject(ThemeService);
  protected readonly language = inject(LanguageService);
  protected readonly t = this.language.t;

  protected readonly items = NAV_ITEMS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = computed(() => this.scroll.y() > 24);
  protected readonly primary = computed(() => this.contacts().find((link) => link.primary));

  constructor() {
    // con il menu aperto la pagina sotto non deve scorrere
    const body = inject(DOCUMENT).body;
    effect(() => body.classList.toggle('no-scroll', this.menuOpen()));
  }

  protected goTo(event: Event, id: string): void {
    event.preventDefault();
    this.menuOpen.set(false);
    // aspetto che il blocco dello scroll venga tolto
    requestAnimationFrame(() => this.scroll.scrollTo(id));
  }

  protected toTop(event: Event): void {
    event.preventDefault();
    this.menuOpen.set(false);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

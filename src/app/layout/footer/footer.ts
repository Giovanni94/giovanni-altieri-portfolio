import { Component, inject, input } from '@angular/core';
import { ContactLink } from '../../models/cv';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';
import { NAV_ITEMS } from '../../shared/nav-items';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly name = input.required<string>();
  readonly links = input.required<ContactLink[]>();

  private readonly scroll = inject(ScrollService);
  protected readonly t = inject(LanguageService).t;
  protected readonly items = NAV_ITEMS;
  protected readonly year = new Date().getFullYear();

  protected goTo(event: Event, id: string): void {
    event.preventDefault();
    this.scroll.scrollTo(id);
  }
}

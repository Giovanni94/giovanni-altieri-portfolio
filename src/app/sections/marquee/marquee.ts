import { Component, computed, inject, input } from '@angular/core';
import { LanguageService } from '../../services/language.service';

// Fascia di testo che scorre in orizzontale
@Component({
  selector: 'app-marquee',
  template: `
    <div class="marquee" role="region" [attr.aria-label]="t().marquee">
      <ul class="marquee__track" aria-hidden="true">
        @for (item of loop(); track $index) {
          <li>{{ item }}<span class="star">✦</span></li>
        }
      </ul>
    </div>
  `,
  styles: `
    .marquee {
      position: relative;
      z-index: 1;
      overflow: hidden;
      padding-block: 1.4rem;
      background: var(--night);
      border-block: 1px solid rgba(255, 255, 255, 0.06);
    }
    .marquee__track {
      display: flex;
      width: max-content;
      list-style: none;
      animation: scroll 40s linear infinite;
    }
    .marquee:hover .marquee__track { animation-play-state: paused; }
    li {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-right: 2rem;
      font-size: clamp(1.4rem, 3vw, 2.2rem);
      font-weight: 800;
      font-variation-settings: "wdth" 110;
      letter-spacing: -0.02em;
      color: var(--on-night);
      white-space: nowrap;
    }
    .star { font-size: 0.6em; color: var(--cyan); }
    @keyframes scroll { to { transform: translateX(-50%); } }
  `,
})
export class Marquee {
  readonly items = input.required<string[]>();

  protected readonly t = inject(LanguageService).t;

  // duplico la lista così lo scorrimento è continuo
  protected readonly loop = computed(() => [...this.items(), ...this.items()]);
}

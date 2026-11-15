import { Component, input } from '@angular/core';
import { RevealDirective } from '../reveal.directive';
import { ScrollText } from '../scroll-text/scroll-text';

@Component({
  selector: 'app-section-head',
  imports: [RevealDirective, ScrollText],
  template: `
    <div class="head">
      <p class="head__label" appReveal><span>{{ index() }}</span> / {{ label() }}</p>
      <h2 class="head__title" [id]="titleId()" [appScrollText]="title()" variant="rise"></h2>
    </div>
  `,
  styles: `
    .head { margin-bottom: clamp(2.5rem, 6vw, 4.5rem); }

    .head__label {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin: 0 0 1.25rem;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--section-soft);
    }
    .head__label::before {
      content: "";
      width: 1.75rem;
      height: 2px;
      background: var(--grad);
    }
    .head__label span { color: var(--section-accent); }

    .head__title {
      max-width: 16ch;
      font-size: clamp(2.4rem, 6.5vw, 5rem);
      font-weight: 800;
      font-variation-settings: "wdth" 108;
      line-height: 0.95;
      letter-spacing: -0.035em;
      color: var(--section-ink);
    }
  `,
})
export class SectionHead {
  readonly index = input.required<string>();
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly titleId = input<string>();
}

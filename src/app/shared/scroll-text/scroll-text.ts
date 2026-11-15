import {
  Component,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

// Mostra il testo parola per parola mentre si scorre.
// Le parole già comparse restano visibili anche tornando su.
@Component({
  selector: '[appScrollText]',
  template: `
    @for (word of words(); track $index) {
      <span class="w" [class.on]="$index < revealed()" aria-hidden="true">{{ word }}</span>
    }
  `,
  styles: `
    :host { display: block; }
    .w {
      display: inline-block;
      margin-right: 0.24em;
      transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.2, 0.75, 0.15, 1);
    }
    :host(.dim) .w { opacity: 0.16; }
    :host(.rise) .w { opacity: 0; transform: translateY(0.45em); }
    .w.on { opacity: 1 !important; transform: none !important; }

    @media (prefers-reduced-motion: reduce) {
      .w { opacity: 1 !important; transform: none !important; transition: none; }
    }
  `,
  host: {
    '[attr.aria-label]': 'appScrollText()',
    '[class.dim]': 'variant() === "dim"',
    '[class.rise]': 'variant() === "rise"',
  },
})
export class ScrollText {
  readonly appScrollText = input.required<string>();
  readonly variant = input<'dim' | 'rise'>('dim');

  private readonly element = inject(ElementRef<HTMLElement>).nativeElement as HTMLElement;
  private readonly scroll = inject(ScrollService);
  private readonly ready = signal(false);

  protected readonly words = computed(() => this.appScrollText().split(/\s+/).filter(Boolean));
  protected readonly revealed = signal(0);

  private lastWords: string[] = [];

  constructor() {
    afterNextRender(() => this.ready.set(true));

    effect(() => {
      const words = this.words();
      this.scroll.y();
      if (!this.ready()) return;

      const rect = this.element.getBoundingClientRect();
      const vh = window.innerHeight;

      // 0 quando il testo entra dal basso, 1 quando arriva a un terzo dello schermo
      const start = vh * 0.92;
      const end = vh * 0.35;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const count = Math.ceil(progress * words.length);

      untracked(() => {
        if (words !== this.lastWords) {
          // testo nuovo (es. cambio lingua): mantengo la stessa percentuale già mostrata
          const shown = this.lastWords.length ? this.revealed() / this.lastWords.length : 0;
          this.lastWords = words;
          this.revealed.set(Math.max(count, Math.round(shown * words.length)));
        } else if (count > this.revealed()) {
          this.revealed.set(count);
        }
      });
    });
  }
}

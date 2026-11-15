import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input, signal } from '@angular/core';

// Fa comparire l'elemento quando entra nello schermo
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.is-visible]': 'visible()',
    '[style.--reveal-delay]': 'delay() + "ms"',
  },
})
export class RevealDirective {
  readonly delay = input(0, { alias: 'appReveal', transform: (v: number | string) => Number(v) || 0 });

  protected readonly visible = signal(false);

  constructor() {
    const element = inject(ElementRef<HTMLElement>).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.visible.set(true);
            observer.disconnect();
          }
        },
        { threshold: 0.12 },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

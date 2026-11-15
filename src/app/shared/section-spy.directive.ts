import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

// Segnala quale sezione è al centro dello schermo
@Directive({
  selector: '[appSectionSpy]',
})
export class SectionSpyDirective {
  constructor() {
    const element = inject(ElementRef<HTMLElement>).nativeElement;
    const scroll = inject(ScrollService);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) scroll.activeSection.set(element.id);
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

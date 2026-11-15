import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);
  private ticking = false;

  readonly y = signal(0);
  readonly progress = signal(0);
  readonly activeSection = signal('');

  constructor() {
    const win = this.document.defaultView;
    if (!win) return;

    // aggiorno al massimo una volta per frame
    win.addEventListener(
      'scroll',
      () => {
        if (this.ticking) return;
        this.ticking = true;
        win.requestAnimationFrame(() => {
          this.update(win);
          this.ticking = false;
        });
      },
      { passive: true },
    );
    win.addEventListener('resize', () => this.update(win), { passive: true });
    this.update(win);
  }

  scrollTo(id: string): void {
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  private update(win: Window): void {
    const max = this.document.documentElement.scrollHeight - win.innerHeight;
    this.y.set(win.scrollY);
    this.progress.set(max > 0 ? Math.min(1, win.scrollY / max) : 0);
  }
}

import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { Lang, UI } from '../i18n/ui';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly root = inject(DOCUMENT).documentElement;

  readonly lang = signal<Lang>(readSavedLang());

  // testi dell'interfaccia nella lingua corrente
  readonly t = computed(() => UI[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.root.lang = lang;
      try {
        localStorage.setItem('lang', lang);
      } catch {
        // localStorage non disponibile
      }
    });
  }

  toggle(): void {
    this.lang.update((current) => (current === 'it' ? 'en' : 'it'));
  }
}

function readSavedLang(): Lang {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'it';
  } catch {
    return 'it';
  }
}

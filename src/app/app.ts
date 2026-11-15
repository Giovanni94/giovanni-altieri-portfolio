import { Component, computed, inject, linkedSignal } from '@angular/core';
import { Cv } from './models/cv';
import { CvService } from './services/cv.service';
import { LanguageService } from './services/language.service';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { Marquee } from './sections/marquee/marquee';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, Marquee, About, Experience, Skills, Projects, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly cvResource = inject(CvService).cv;
  protected readonly t = inject(LanguageService).t;

  // Mentre arriva il JSON nell'altra lingua tengo a schermo quello precedente,
  // così la pagina non sparisce durante il cambio lingua.
  protected readonly cv = linkedSignal<Cv | undefined, Cv | undefined>({
    source: () => (this.cvResource.hasValue() ? this.cvResource.value() : undefined),
    computation: (next, previous) => next ?? previous?.value,
  });

  protected readonly failed = computed(() => !this.cv() && !!this.cvResource.error());

  protected readonly primaryContact = computed(() => this.cv()?.contacts.find((link) => link.primary));

  // tecnologie per la fascia scorrevole, senza doppioni
  protected readonly stack = computed(() => [...new Set(this.cv()?.experiences.flatMap((exp) => exp.tags) ?? [])]);
}

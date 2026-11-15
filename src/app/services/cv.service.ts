import { Injectable, inject } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Cv } from '../models/cv';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class CvService {
  private readonly language = inject(LanguageService);

  // cambia lingua → cambia URL → la risorsa si ricarica da sola
  readonly cv = httpResource<Cv>(() => `cv.${this.language.lang()}.json`);
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teacher-place';


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'fr';
    translate.setDefaultLang(savedLang);
    translate.use(savedLang);

  }
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
  }
}

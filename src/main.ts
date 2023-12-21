// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Ensure the path is correct

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

bootstrapApplication(AppComponent, {
  providers: []
});


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule), // برای ngModel
    importProvidersFrom(HttpClientModule ),
    importProvidersFrom(CommonModule ),
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(MatExpansionModule),
    provideRouter(routes),provideHttpClient(), provideAnimationsAsync()
  ],
}).catch(err => console.error(err));
import { Routes } from '@angular/router';
import { BillboardComponent } from './billboard/billboard.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // ریدایرکت به مسیر home یا هر مسیر دیگری
    { path: 'home', component: BillboardComponent },
    { path: 'about', component: AboutComponent },
    { path: 'work', component: WorkComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }  // ریدایرکت همه مسیرهای نامعتبر به home
  ];
  
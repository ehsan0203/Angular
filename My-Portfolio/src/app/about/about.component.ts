import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('درباره احسان چیت‌ساز | برنامه‌نویس فول استک و طراح سایت');
    this.metaService.updateTag({ name: 'description', content: 'احسان چیت‌ساز، برنامه‌نویس فول استک با تخصص در Angular و ASP.NET. علاقه‌مند به چالش‌های بک‌اند و یادگیری مداوم. برای آشنایی بیشتر با احسان و تجربه‌های او کلیک کنید.' });
    this.metaService.updateTag({ name: 'keywords', content: 'احسان چیت‌ساز, برنامه‌نویس فول استک, طراح سایت, Angular, ASP.NET, توسعه دهنده وب, تجربه کاری, درباره من' });
    this.metaService.updateTag({ property: 'og:title', content: 'درباره احسان چیت‌ساز | برنامه‌نویس فول استک و طراح سایت' });
    this.metaService.updateTag({ property: 'og:description', content: 'احسان چیت‌ساز، برنامه‌نویس فول استک با تخصص در Angular و ASP.NET، و علاقه‌مند به بک‌اند و یادگیری مداوم. با او بیشتر آشنا شوید.' });  }
}

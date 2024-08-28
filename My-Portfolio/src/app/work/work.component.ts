import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('خدمات احسان چیت‌ساز | طراحی وب، برنامه‌نویسی و توسعه سایت');
    this.metaService.updateTag({ name: 'description', content: 'احسان چیت‌ساز، طراح و برنامه‌نویس وب حرفه‌ای، ارائه دهنده خدمات طراحی صفحات شیک، توسعه سایت‌های واکنش‌گرا، و برنامه‌نویسی اپلیکیشن‌های مدرن با استفاده از HTML, CSS, JavaScript, ASP.NET و Blazor , Angular.' });
    this.metaService.updateTag({ name: 'keywords', content: 'خدمات طراحی وب, برنامه‌نویسی سایت, توسعه سایت‌های واکنش‌گرا, HTML, CSS, JavaScript, ASP.NET, Blazor, احسان چیت‌ساز' });
    this.metaService.updateTag({ property: 'og:title', content: 'خدمات احسان چیت‌ساز | طراحی وب، برنامه‌نویسی و توسعه سایت' });
    this.metaService.updateTag({ property: 'og:description', content: 'با خدمات حرفه‌ای احسان چیت‌ساز، طراحی و توسعه سایت‌های مدرن و اپلیکیشن‌های قدرتمند را تجربه کنید.' });  }
}

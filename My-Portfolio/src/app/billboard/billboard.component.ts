import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-billboard',
  standalone: true,
  imports: [],
  templateUrl: './billboard.component.html',
  styleUrl: './billboard.component.scss'
})
export class BillboardComponent {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('احسان چیت‌ساز | طراح و برنامه‌نویس وب حرفه‌ای');
    this.metaService.updateTag({ name: 'description', content: 'احسان چیت‌ساز، متخصص طراحی و برنامه‌نویسی وب، با ارائه سایت‌های حرفه‌ای و بهینه‌سازی شده برای موتورهای جستجو. ساخت سایت دلخواه با کارایی و سرعت بالا. همین حالا شروع کنید' });
    this.metaService.updateTag({ name: 'keywords', content: 'احسان چیت‌ساز, طراحی سایت حرفه‌ای, برنامه‌نویسی وب, سایت ساز سریع, بهینه‌سازی سایت, سئو, توسعه وب‌سایت, طراحی واکنش‌گرا, ساخت سایت، افزایش رتبه گوگل' });
    this.metaService.updateTag({ property: 'og:title', content: 'احسان چیت‌ساز | طراح و برنامه‌نویس وب حرفه‌ای' });
    this.metaService.updateTag({ property: 'og:description', content: 'احسان چیت‌ساز | طراح و برنامه‌نویس وب حرفه‌ای' });
  }
  
  
}

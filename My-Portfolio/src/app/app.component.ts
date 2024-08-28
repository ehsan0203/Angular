import { Component,Renderer2  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private router: Router, private renderer: Renderer2,private titleService: Title, private metaService: Meta) {}
  title = 'احسان چیت ساز';
  ngOnInit(): void {
    this.titleService.setTitle('احسان چیت‌ساز | طراح و برنامه‌نویس وب حرفه‌ای');
    this.metaService.updateTag({ name: 'description', content: 'احسان چیت‌ساز، متخصص طراحی و برنامه‌نویسی وب، با ارائه سایت‌های حرفه‌ای و بهینه‌سازی شده برای موتورهای جستجو. ساخت سایت دلخواه با کارایی و سرعت بالا. همین حالا شروع کنید' });
    this.metaService.updateTag({ name: 'keywords', content: 'احسان چیت‌ساز, طراحی سایت حرفه‌ای, برنامه‌نویسی وب, سایت ساز سریع, بهینه‌سازی سایت, سئو, توسعه وب‌سایت, طراحی واکنش‌گرا, ساخت سایت، افزایش رتبه گوگل' });
    this.metaService.updateTag({ property: 'og:title', content: 'احسان چیت‌ساز | طراح و برنامه‌نویس وب حرفه‌ای' });
    this.metaService.updateTag({ property: 'og:description', content: 'احسان چیت‌ساز | طراح و برنامه‌نویس وب حرفه‌ای' });
  }
  isLinkActive(url: string): boolean {
    return this.router.url === url;
  }

  closeMenu() {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}
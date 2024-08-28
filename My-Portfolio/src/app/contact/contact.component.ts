import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Smsir } from 'sms-typescript/lib';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  smsWebService!: Smsir;
  name: string = '';
  email: string = '';
  message: string = '';
  loading: boolean = false;

  constructor(private titleService: Title, private metaService: Meta) {
    // مقداردهی سرویس پیامک با استفاده از کلید دسترسی و شماره خط
    this.smsWebService = new Smsir(
      'C2hEujCMit84yRvWAhKhoDmhAdnG9nBe7BgJn1sUMm0w8dLoYR5YN1fCcKbfl7o5', // کلید دسترسی شما
      30007732912711 // شماره خط شما
    );
  }

  ngOnInit(): void {
    this.titleService.setTitle('تماس با احسان چیت‌ساز | ارتباط با طراح و برنامه‌نویس وب');
    this.metaService.updateTag({ name: 'description', content: 'برای ارتباط با احسان چیت‌ساز، طراح و برنامه‌نویس وب حرفه‌ای، و دریافت اطلاعات بیشتر، لطفاً از طریق ایمیل یا شماره تماس ذکر شده در این صفحه اقدام نمایید.' });
    this.metaService.updateTag({ name: 'keywords', content: 'تماس با احسان چیت‌ساز, طراح وب, برنامه‌نویس وب, اطلاعات تماس, ایمیل, شماره تماس' });
    this.metaService.updateTag({ property: 'og:title', content: 'تماس با احسان چیت‌ساز | ارتباط با طراح و برنامه‌نویس وب' });
    this.metaService.updateTag({ property: 'og:description', content: 'احسان چیت‌ساز، متخصص طراحی و برنامه‌نویسی وب حرفه‌ای، آماده پاسخگویی به سوالات شما از طریق ایمیل و شماره تماس می‌باشد.' });
  }

  onSubmit() {
    this.loading = true;
    const fullMessage = `نام: ${this.name}\nایمیل: ${this.email}\nپیام: ${this.message}`;

    this.smsWebService.SendBulk(fullMessage, ['09156201696'], null)
      .then((response: any) => {
        alert('پیام شما با موفقیت ارسال شد!');
        this.resetForm();
      })
      .catch((error: any) => {
        alert('ارسال پیام با خطا مواجه شد.');
        console.error(error);
      })
      .finally(() => {
        this.loading = false;
        console.log('ارسال پیامک به پایان رسید.');
      });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
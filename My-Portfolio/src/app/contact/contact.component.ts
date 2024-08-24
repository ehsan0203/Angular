import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  constructor() {
    // مقداردهی سرویس پیامک با استفاده از کلید دسترسی و شماره خط
    this.smsWebService = new Smsir(
      'C2hEujCMit84yRvWAhKhoDmhAdnG9nBe7BgJn1sUMm0w8dLoYR5YN1fCcKbfl7o5', // کلید دسترسی شما
      30007732912711 // شماره خط شما
    );
  }

  ngOnInit(): void {}

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
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SmsService {
  private apiUrl = 'https://api.sms.ir/v1/send';
  private apiKey = 'C2hEujCMit84yRvWAhKhoDmhAdnG9nBe7BgJn1sUMm0w8dLoYR5YN1fCcKbfl7o5';
  private lineNumber = '30007732912711';

  constructor(private http: HttpClient) {}

  sendSms(name: string, email: string, message: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.apiKey,
    });

    const payload = {
      LineNumber: this.lineNumber,
      MobileNumbers: ['09332725515'],
      Message: `نام: ${name}\nایمیل: ${email}\nپیام: ${message}`,
      SendDateTime: '',
      CanContinueInCaseOfError: 'false',
    };

    return this.http.post(this.apiUrl, payload, { headers });
  }
}

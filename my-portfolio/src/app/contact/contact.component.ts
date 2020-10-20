import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  objectFormControl = new FormControl('', [
    Validators.required
  ]);
  email: string;
  object: string;
  text: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  sendMail() {
    console.log('to send mail');
    const form = {
      email: this.email,
      object: this.object,
      text: this.text
    };
    this.http.post('/api/sendmail', form).subscribe(data => {
      console.log(data);
    });
  }
}

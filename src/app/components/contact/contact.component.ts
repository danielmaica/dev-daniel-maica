import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
email: string = 'danielmaica.dev@gmail.com'
phone: string = '(51) 99205-8011'
}

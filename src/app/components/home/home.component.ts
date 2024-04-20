import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

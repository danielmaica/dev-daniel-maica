import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input ("skill") skill: string = "titulo";
  @Input ("description") description: string = "descrição";
  @Input ("icon") icon: string = "";

}

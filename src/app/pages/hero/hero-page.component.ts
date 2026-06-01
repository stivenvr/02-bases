import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => `The hero's name is ${this.name()} and he/she is ${this.age()} years old.`);

  getHeroDescription() {
    return this.heroDescription();
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

}

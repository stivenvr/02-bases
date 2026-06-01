import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [
    NgClass
  ],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {

  name = signal('');
  power = signal(0);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8500 },
    // { id: 3, name: 'Gohan', power: 7000 },
    // { id: 4, name: 'Yamcha', power: 500 },
  ]);

  addCharacter(name: string, power: number) {
    this.characters.update((chars) => [...chars, { id: chars.length + 1, name, power }]);
  }

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  addCharacterWithPower() {
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((chars) => [...chars, newCharacter]);
  }
}

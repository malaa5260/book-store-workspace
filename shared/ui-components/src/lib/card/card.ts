import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() interactive = false;
  @Input() size: 'compact' | 'default' | 'large' = 'default';

  get cardClasses(): string {
    const classes = ['card'];

    if (this.interactive) {
      classes.push('card-interactive');
    }

    if (this.size !== 'default') {
      classes.push(`card-${this.size}`);
    }

    return classes.join(' ');
  }

  get hasFooterContent(): boolean {
    // This would need to be implemented with ContentChild to check for footer content
    return false;
  }
}

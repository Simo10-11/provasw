import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Prodotto } from '../../dto/prodotto.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  readonly fallbackImageUrl = 'https://via.placeholder.com/240x150?text=Prodotto';

  @Input({ required: true }) prodotto!: Prodotto;

  addToCart(): void {
    // Per ora stampiamo in console, poi qui andra la logica carrello.
    console.log('Aggiunto al carrello:', this.prodotto.nome);
  }

  getImageUrl(): string {
    const imageUrl = this.prodotto.imageUrl?.trim();
    return imageUrl ? imageUrl : this.fallbackImageUrl;
  }
}

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

  readonly fallbackImageUrl: string = 'https://placehold.co/240x150?text=Prodotto';
  readonly embeddedFallbackImageUrl: string = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="150" viewBox="0 0 240 150"><rect width="240" height="150" fill="%23e2e8f0"/><text x="120" y="78" text-anchor="middle" font-family="Arial" font-size="16" fill="%23475569">Prodotto</text></svg>';

  @Input({ required: true }) prodotto!: Prodotto;

  addToCart(): void {
    // Per ora stampiamo in console, poi qui andra la logica carrello.
    console.log('Aggiunto al carrello:', this.prodotto.nome);
  }

  getImageUrl(): string {
    if (!this.prodotto) {
      return this.fallbackImageUrl;
    }

    const imageUrl = this.prodotto.imageUrl?.trim();

    if (!imageUrl) {
      return this.fallbackImageUrl;
    }

    const normalized = imageUrl.toLowerCase();
    if (normalized === 'null' || normalized === 'undefined') {
      return this.fallbackImageUrl;
    }

    return imageUrl;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (!img) {
      return;
    }

    const currentSrc = img.getAttribute('src') ?? '';

    // Primo fallback: placeholder web.
    if (currentSrc !== this.fallbackImageUrl) {
      img.src = this.fallbackImageUrl;
      return;
    }

    // Fallback finale locale (nessuna dipendenza da rete).
    if (currentSrc !== this.embeddedFallbackImageUrl) {
      img.src = this.embeddedFallbackImageUrl;
    }
  }
}

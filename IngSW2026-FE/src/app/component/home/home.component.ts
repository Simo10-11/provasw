import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../dto/categoria.model';
import { Prodotto } from '../../dto/prodotto.model';
import { CategoriaService } from '../../service/categoria.service';
import { ProductService } from '../../service/product.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent, SidebarComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  categorie: Categoria[] = [];
  prodotti: Prodotto[] = [];
  errorMessage = '';

  selectedCategoriaId: number | null = null;
  searchValue = '';

  constructor(
    private categoriaService: CategoriaService,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    // Al caricamento pagina recupera subito categorie e prodotti.
    this.loadCategorie();
    this.loadProdotti();
  }

  // Aggiorna il testo di ricerca dalla navbar.
  onSearchChange(value: string): void {
    this.searchValue = value.trim();
    this.applyFilters();
  }

  // Aggiorna la categoria selezionata dalla sidebar.
  onCategorySelected(categoriaId: number | null | undefined): void {
    this.selectedCategoriaId = categoriaId ?? null;
    this.applyFilters();
  }

  // Chiamata backend per caricare tutte le categorie.
  private loadCategorie(): void {
    this.categoriaService.getAllCategorie().subscribe({
      next: (data) => {
        this.categorie = data;
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Errore nel caricamento categorie', err);
        this.errorMessage = 'Errore nel caricamento categorie dal backend.';
      }
    });
  }

  // Chiamata backend per caricare tutti i prodotti.
  private loadProdotti(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.prodotti = data;
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Errore nel caricamento prodotti', err);
        this.errorMessage = 'Errore nel caricamento prodotti dal backend.';
      }
    });
  }

  // Applica i filtri in base a ricerca e categoria selezionata.
  private applyFilters(): void {
    const hasSearch = this.searchValue.length > 0;
    const hasCategoria = this.selectedCategoriaId !== null;

    // Nessun filtro: mostra tutto.
    if (!hasSearch && !hasCategoria) {
      this.loadProdotti();
      return;
    }

    // Solo ricerca per nome.
    if (hasSearch && !hasCategoria) {
      this.productService.searchByNome(this.searchValue).subscribe({
        next: (data) => {
          this.prodotti = data;
          this.errorMessage = '';
        },
        error: (err) => {
          console.error('Errore nella ricerca prodotti', err);
          this.errorMessage = 'Errore nella ricerca prodotti.';
        }
      });
      return;
    }

    // Solo filtro per categoria.
    if (!hasSearch && hasCategoria) {
      this.productService.getByCategoria(this.selectedCategoriaId as number).subscribe({
        next: (data) => {
          this.prodotti = data;
          this.errorMessage = '';
        },
        error: (err) => {
          console.error('Errore nel filtro categoria', err);
          this.errorMessage = 'Errore nel filtro per categoria.';
        }
      });
      return;
    }

    // Filtro combinato: prima categoria dal backend, poi filtro nome lato frontend.
    this.productService.getByCategoria(this.selectedCategoriaId as number).subscribe({
      next: (data) => {
        this.prodotti = data.filter((p) => p.NOME.toLowerCase().includes(this.searchValue.toLowerCase()));
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Errore nel filtro combinato', err);
        this.errorMessage = 'Errore nel filtro combinato.';
      }
    });
  }
}

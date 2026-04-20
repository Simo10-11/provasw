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
    this.loadCategorie();
    this.loadProdotti();
  }

  onSearchChange(value: string): void {
    this.searchValue = value.trim();
    this.applyFilters();
  }

  onCategorySelected(categoriaId: number | null | undefined): void {
    this.selectedCategoriaId = categoriaId ?? null;
    this.applyFilters();
  }

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

  private applyFilters(): void {
    const hasSearch = this.searchValue.length > 0;
    const hasCategoria = this.selectedCategoriaId !== null;

    if (!hasSearch && !hasCategoria) {
      this.loadProdotti();
      return;
    }

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

    this.productService.getByCategoria(this.selectedCategoriaId as number).subscribe({
      next: (data) => {
        // Filtro combinato lato frontend: categoria + nome.
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

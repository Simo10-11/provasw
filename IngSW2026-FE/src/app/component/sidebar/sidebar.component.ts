import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../../dto/categoria.model';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() categorie: Categoria[] = [];
  @Output() categorySelected = new EventEmitter<number | null>();

  selectedId: number | null = null;

  selectCategory(id: number | null): void {
    this.selectedId = id;
    this.categorySelected.emit(id);
  }
}

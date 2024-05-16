import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnChanges{
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPage: any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  totalPages: number;
  pages: number[] = [];

  constructor() {}

  ngOnChanges() {
    if(this.totalItems) {
      this.totalPages=Math.ceil(this.totalItems / this.itemsPerPage);
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    } 
  }  

  pageClicked(page: number) {
    if (page<=this.totalPages) {
      this.onClick.emit(page);
    }
  }
}

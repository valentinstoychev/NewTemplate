import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Item }                from './item';
import { ItemService }         from './item.service';

@Component({
    selector: "items",
    templateUrl: "items.component.html",
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(
    private itemService: ItemService,
    private router: Router
    ) { }
 
  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
    
}
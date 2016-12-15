import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
    selector: "details",
    templateUrl: "item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params) => {
                this.item = this.itemService.getItem(+params['id']);
            }
        );
    }
}
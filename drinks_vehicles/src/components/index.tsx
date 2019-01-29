import {FunctionComponent} from "react";
import {Item} from "../model";
import React from "react";

// TODO: Style me
export const ItemComponent: FunctionComponent<Item> = (item) => (
    <div>
        <div>{item.name}</div>
        <div>£ {item.price}</div>
    </div>
)

// TODO: Style me
export const BasketComponent: FunctionComponent<({items: Item[], total: number})> = ({ items, total }) => (
    <div>
        <div>
            $ {total}
        </div>
        <div>
            {items.map(ItemComponent)}
        </div>
    </div>
)
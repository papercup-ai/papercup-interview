export class Item {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly price: number) {
    }
}

export interface BasketInterface {
    addItem: (i: Item) => void;
    removeItem: (i: Item) => void;
    getTotal: () => number;
    getItems: () => Item[];
}

export interface ItemQuantity extends Item {
    quantity: number
}

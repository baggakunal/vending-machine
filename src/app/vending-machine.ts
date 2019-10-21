/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./product-factory.ts" />

enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    public stock: KnockoutObservable<number> = ko.observable(3);
    public sold: KnockoutObservable<boolean> = ko.observable(false);

    constructor(public product: Product) {

    }
}

class VendingMachine {
    cells: KnockoutObservableArray<Cell> = ko.observableArray([]);
    acceptedCoins: Array<Coin> = [new Dime(), new Quarter(), new Half(), new Dollar()];
    paid: KnockoutObservable<number> = ko.observable(0);
    selectedCell: KnockoutObservable<Cell> = ko.observable(new Cell(new Initial()));
    canPay = ko.pureComputed(() => this.selectedCell().product.price > 0 && this.paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            const product = ProductFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    acceptCoin = (coin: Quarter): void => {
        this.paid(Number((this.paid() + coin.value).toFixed(2)));
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!");
            return;
        }

        const currentPaid = this.paid();
        this.paid(Math.round((currentPaid - this.selectedCell().product.price) * 100) / 100);

        const currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}

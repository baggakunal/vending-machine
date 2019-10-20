/// <reference path="./coin.ts" />


class VendingMachine {
    private paid: number = 0;

    acceptCoin = (coin: Quarter): void => {
        this.paid += coin.value;
        const totalElement = document.getElementById("total");
        if (totalElement) {
            totalElement.innerHTML = this.paid.toFixed(2);
        }
    }
}

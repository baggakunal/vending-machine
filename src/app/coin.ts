abstract class Coin {
    protected _value: number;
    abstract value: number;
    abstract getImageUrl(): string;

    constructor(value: number) {
        this._value = value;
    }
}

class Quarter extends Coin {
    get value(): number {
        return this._value;
    }

    constructor() {
        super(0.25);
    }

    public getImageUrl(): string {
        return "assets/img/Quarter.png";
    }
}

class Dime extends Coin {
    get value(): number {
        return this._value;
    }

    constructor() {
        super(0.10);
    }

    public getImageUrl(): string {
        return "assets/img/Dime.png";
    }
}

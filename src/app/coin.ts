abstract class Coin {
    abstract getImageUrl(): string;
    protected _imgPath: string = "assets/img/";

    protected _value: number;
    get value(): number {
        return this._value;
    };

    constructor(value: number) {
        this._value = value;
    }
}

class Dime extends Coin {
    constructor() {
        super(0.10);
    }

    public getImageUrl(): string {
        return this._imgPath + "Dime.png";
    }
}

class Quarter extends Coin {
    constructor() {
        super(0.25);
    }

    public getImageUrl(): string {
        return this._imgPath + "Quarter.png";
    }
}

class Half extends Coin {
    constructor() {
        super(0.5);
    }

    public getImageUrl(): string {
        return this._imgPath + "Half.png";
    }
}

class Dollar extends Coin {
    constructor() {
        super(1);
    }

    public getImageUrl(): string {
        return this._imgPath + "Dollar.jpg";
    }
}

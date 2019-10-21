const IMG_PATH: string = "assets/img/";

export abstract class Coin {
    abstract getImageUrl(): string;

    protected _value: number;
    get value(): number {
        return this._value;
    };

    constructor(value: number) {
        this._value = value;
    }
}

export class Dime extends Coin {
    constructor() {
        super(0.10);
    }

    public getImageUrl(): string {
        return IMG_PATH + "Dime.png";
    }
}

export class Quarter extends Coin {
    constructor() {
        super(0.25);
    }

    public getImageUrl(): string {
        return IMG_PATH + "Quarter.png";
    }
}

export class Half extends Coin {
    constructor() {
        super(0.5);
    }

    public getImageUrl(): string {
        return IMG_PATH + "Half.png";
    }
}

export class Dollar extends Coin {
    constructor() {
        super(1);
    }

    public getImageUrl(): string {
        return IMG_PATH + "Dollar.jpg";
    }
}

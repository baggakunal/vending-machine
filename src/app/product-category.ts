abstract class ProductCategory {
    abstract getImageUrl(): string;

    protected _imgPath: string = "assets/img/";
    protected _name: string;
    get name(): string {
        return this._name;
    };

    constructor(name: string) {
        this._name = name;
    }
}

class SodaCategory extends ProductCategory {
    constructor() {
        super("Soda")
    }

    public getImageUrl(): string {
        return this._imgPath + "SodaCan.png";
    }
}

class NutsCategory extends ProductCategory {
    constructor() {
        super("Nuts")
    }

    getImageUrl() {
        return this._imgPath + "Nuts.png";
    }
}

class ChipsCategory extends ProductCategory {
    constructor() {
        super("Potato chips")
    }

    getImageUrl() {
        return this._imgPath + "Chips.png";
    }
}

class CandyCategory extends ProductCategory {
    constructor() {
        super("Candy")
    }

    getImageUrl() {
        return this._imgPath + "Candy.png";
    }
}

class CandyBarCategory extends ProductCategory {
    constructor() {
        super("Candy bar")
    }

    getImageUrl() {
        return this._imgPath + "CandyBar.png";
    }
}


export { ProductCategory, SodaCategory, NutsCategory, ChipsCategory, CandyCategory, CandyBarCategory };

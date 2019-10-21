class Quarter {
    private _value: number = 0.25;
    get value(): number {
        return this._value;
    }

    public getImageUrl(): string {
        return "assets/img/Quarter.png";
    }
}

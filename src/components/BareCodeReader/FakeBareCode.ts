export class FakeBareCode {
    private _bareCode: string = "";
    private _productName: string = "";
    private _productStock: number = 0;

    constructor(bareCode: string, productName: string, productStock: number) {
        this._bareCode = bareCode;
        this._productName = productName;
        this._productStock = productStock;
    }

    get bareCode() {
        return this._bareCode;
    }

    set bareCode(bareCode: string) {
        this._bareCode = bareCode;
    }

    get productName() {
        return this._productName;
    }

    set productName(productName: string) {
        this._productName = productName;
    }

    get productStock() {
        return this._productStock;
    }

    set productStock(productStock: number) {
        this._productStock = productStock;
    }
}

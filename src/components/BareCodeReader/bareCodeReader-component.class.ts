/**
 * Va receptionner le code barre d'un produit
 * Va le stocker dans une variable
 * Transmet le code barre à un autre composant ?
 *  OU
 * Trouve un produit correspondant à ce code barre ?
 */
export class BareCodeReader {
    /**
     * Barecode of new added product
     */
    private _bareCode: string = "";

    get bareCode() {
        return this._bareCode;
    }

    /**
     * Will save the bareCode in a field
     * @see _bareCode
     * @param bareCode Barecode of the current entry of a new product
     */
    RetrieveBareCode(bareCode: string) {
        this._bareCode = bareCode;
        this.FoundCorrespondingProduct(this._bareCode);
    }

    /**
     * Will return a product with an id corresponding at the barecode parameter
     * @param barecode Barecode of a new added product
     */
    // private FoundCorrespondingProduct(barecode: string) /*: Product*/ {
    //     // get the bare code and reshearch in the OpenFoodFact API the corresponding product

    //     // return founded product in the database API
    // }
}

/**
 * Va receptionner le code barre d'un produit
 * Va le stocker dans une variable
 * Transmet le code barre à un autre composant ?
 *  OU
 * Trouve un produit correspondant à ce code barre ?
 */
export class BareCodeReader {
    /**
     * URL of new added product
     */
    private _productURL: string = "";

    /**
     *
     * @see _productURL
     * @param bareCode Barecode of the current entry of a new product
     */
    async GetProductByURL(bareCode: string) {
        this._productURL = process.env.BACK_END_API_URL + `/${bareCode}`;
        //return this.FoundCorrespondingProduct(this._productURL)
    }

    /**
     * Will return a product with an id corresponding at the barecode parameter
     * @param barecode Barecode of a new added product
     */
    // private async FoundCorrespondingProduct(productUrl: string): Promise<any> /*: Product*/ {
    //     // get the bare code and reshearch in the OpenFoodFact API the corresponding product
    //     const reponse: Response = await fetch(productUrl, {
    //         method: "GET",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // })

    //     return reponse.json()
    // }
}

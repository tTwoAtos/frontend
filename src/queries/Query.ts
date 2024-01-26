import { AxiosInstance } from "axios";

export class Query {
    axios: AxiosInstance;

    constructor(ax: AxiosInstance) {
        if (!ax) throw new Error("Error while initializing axios");

        this.axios = ax;
    }
}

import axios, { AxiosInstance } from "axios";
import type { App } from "vue";

interface AxiosOptions {
    baseUrl?: string;
    token?: string;
}

export default {
    install: (app: App, options: AxiosOptions) => {
        const ax: AxiosInstance = axios.create({
            baseURL: options.baseUrl,
            headers: {
                Authorization: options.token ? `Bearer ${options.token}` : ""
            }
        });

        app.config.globalProperties.$axios = ax;

        app.provide("axios", ax);
    }
};

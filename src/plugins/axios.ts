import axios, { type AxiosInstance } from "axios";
import type { App } from "vue";

interface AxiosOptions {
    baseUrl?: string;
    token?: string;
    timeout?: number;
}

export default {
    install: (app: App, options: AxiosOptions) => {
        const ax: AxiosInstance = axios.create({
            baseURL: options.baseUrl,
            headers: {
                Authorization: options.token ? `Bearer ${options.token}` : ""
            },
            timeout: options.timeout
        });

        app.config.globalProperties.$axios = ax;

        app.provide("axios", ax);
    }
};

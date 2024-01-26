/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// plugins design
import "vue-toast-notification/dist/theme-bootstrap.css";

// Plugins
import { VueQueryPlugin } from "@tanstack/vue-query";
import axios from "./axios";
import vuetify from "./vuetify";

// Types
import type { App } from "vue";
import ToastPlugin from "vue-toast-notification";

export function registerPlugins(app: App) {
    app.use(vuetify);
    app.use(axios, {
        baseUrl: import.meta.env.VITE_BACK_END_API_URL,
        timeout: 15000
    });
    app.use(VueQueryPlugin, {
        queryClientConfig: {
            defaultOptions: {
                queries: {
                    retry: 2,
                    retryDelay: 5000
                }
            }
        }
    });

    app.use(ToastPlugin);
}

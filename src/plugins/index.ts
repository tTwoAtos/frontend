/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import axios from "./axios";
import vuetify from "./vuetify";
import { VueQueryPlugin } from "@tanstack/vue-query";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
    app.use(vuetify);
    app.use(axios, { baseUrl: import.meta.env.VITE_BACK_END_API_URL });
    app.use(VueQueryPlugin);
}

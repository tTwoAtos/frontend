/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { AxiosInstance } from "axios";
import { createApp } from "vue";

// yup.setLocale({
//     mixed: {
//         required: "Ce champ est requis",
//         notNull: "Ce champ est requis",
//     }
// })

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
    }
}
const app = createApp(App);

registerPlugins(app);

app.mount("#app");

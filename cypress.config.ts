import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "bgqso6",
    e2e: {
        setupNodeEvents() {
            // implement node event listeners here
        }
    },

    component: {
        devServer: {
            framework: "vue",
            bundler: "webpack"
        }
    }
});

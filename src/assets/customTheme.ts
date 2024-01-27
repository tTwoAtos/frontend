export const customTheme = {
    theme: {
        defaultTheme: "light"
    },
    variations: {
        colors: ["primary", "secondary"],
        lighten: 5,
        darken: 5
    },
    themes: {
        light: {
            colors: {
                background: "#FFFFFF",
                surface: "#FFFFFF",
                primary: "#1867C0",
                secondary: "#48A9A6",
                error: "#B00020",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FB8C00"
            }
        },
        dark: {
            colors: {
                background: "#FFFFFF",
                surface: "#FFFFFF",
                primary: "#1867C0",
                secondary: "#48A9A6",
                error: "#B00020",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FB8C00"
            }
        }
    },
    options: {
        customProperties: true,
        variations: true
    }
};

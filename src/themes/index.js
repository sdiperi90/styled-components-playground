const marketer = "theme1";

const baseTheme = {
    typography: {
        font: "Noto, sans-serif, Arial, Helvetica"
    }
};

const theme1 = {
    name: "theme1",
    colors: {
        buy: {
            primary: "#154C95",
            secondary: "#A9A9A9"
        },
        sell: {
            primary: "#002366",
            secondary: "#A9A9A9"
        }
    }
};
const theme2 = {
    name: "theme2",
    colors: {
        buy: {
            primary: "#397367",
            secondary: "#336A4D"
        },
        sell: {
            primary: "#065256",
            secondary: "#065256"
        }
    }
};

export const getTheme = () => {
    if (marketer === "theme2") {
        return { ...theme2, ...baseTheme };
    }
    return { ...theme1, ...baseTheme };
};

import React, { FC, ReactChild } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const Theme = {
    colors: {
        black: "#000000",
        white: "#ffffff",
        gray: {
            "50": "#F7FAFC",
            "100": "#EDF2F7",
            "200": "#E2E8F0",
            "300": "#CBD5E0",
            "400": "#A0AEC0",
            "500": "#718096",
            "600": "#4A5568",
            "700": "#2D3748",
            "800": "#1A202C",
            "900": "#171923",
        },
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
    },
    space: ["0.45rem", "0.6rem", "0.85rem", "1rem"],
};

interface IThemeProvider {
    children: ReactChild;
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => (
    <StyledThemeProvider theme={Theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;

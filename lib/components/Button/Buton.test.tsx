import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../theming";
import Button from "./Button";

describe("<Button />", () => {
    test("It should have a label", () => {
        render(
            <ThemeProvider>
                <Button label="button" />
            </ThemeProvider>,
        );
        const BUTTON = screen.getByText("button");
        expect(BUTTON).toBeInTheDocument;
    });
});

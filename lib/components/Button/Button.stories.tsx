import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, IButtonProps } from "./src/";

export default {
    title: "Components/Button",
    component: Button,
} as Meta;

export const Variants: Story<IButtonProps> = ({ label }) => (
    <>
        <Button label={label} variant="solid" />
        <Button label={label} variant="outline" />
        <Button label={label} variant="ghost" />
        <Button label={label} variant="link" />
    </>
);

Variants.args = { label: "Button" };

export const Sizes: Story<IButtonProps> = ({ label }) => (
    <>
        <Button label={label} size="xs" />
        <Button label={label} size="sm" />
        <Button label={label} size="md" />
        <Button label={label} size="lg" />
    </>
);

Sizes.args = { label: "Button" };

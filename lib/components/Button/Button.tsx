import React, { FC, ElementType } from "react";
import { Solid, Outline, Ghost, Link } from "./ButtonStyled";

export interface IButtonProps {
    label: string;
    size?: "xs" | "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost" | "link";
}

interface IButtonVariants {
    solid: ElementType;
    outline: ElementType;
    ghost: ElementType;
    link: ElementType;
}

const Button: FC<IButtonProps> = ({ label, size, variant = "solid" }: IButtonProps) => {
    const VARIANTS: IButtonVariants = {
        solid: Solid,
        outline: Outline,
        ghost: Ghost,
        link: Link,
    };

    const Button: ElementType = Object(VARIANTS)[variant];

    return (
        <Button type="button" size={size}>
            {label}
        </Button>
    );
};

export default Button;

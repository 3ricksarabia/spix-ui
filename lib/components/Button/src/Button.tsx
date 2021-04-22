import React, { FC, ElementType } from "react";
import { IButtonProps } from "./ButtonProps";
import { Solid, Outline, Ghost, Link } from "./ButtonStyled";

interface IButtonVariants {
    solid: ElementType;
    outline: ElementType;
    ghost: ElementType;
    link: ElementType;
}

export const Button: FC<IButtonProps> = ({ label, size, variant = "solid" }: IButtonProps) => {
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

import React, { FC, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children }: ButtonProps) => (
    <button type="button">{children}</button>
);

import styled from "styled-components";
import { IButtonProps } from "./Button";

const ButtonStyled = styled.button<IButtonProps>`
    cursor: pointer;
    padding: ${({ theme, size = "md" }) =>
        theme.space[Object.keys(theme.fontSizes).findIndex((item) => item === size)]};
    margin: 0.5rem;
    border-radius: 0.25rem;
    font-weight: bold;
    font-size: ${({ theme, size = "md" }) => theme.fontSizes[size]};
    line-height: ${({ theme, size = "md" }) =>
        theme.space[Object.keys(theme.fontSizes).findIndex((item) => item === size)]};
`;

export const Solid = styled(ButtonStyled)`
    background: ${({ theme }) => theme.colors.gray["700"]};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.gray["700"]}`};

    :hover {
        background: ${({ theme }) => theme.colors.gray["800"]};
        border: ${({ theme }) => `1px solid ${theme.colors.gray["800"]}`};
    }
`;

export const Outline = styled(ButtonStyled)`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray["700"]};
    border: ${({ theme }) => `1px solid ${theme.colors.gray["700"]}`};

    :hover {
        background: ${({ theme }) => theme.colors.gray["100"]};
    }
`;

export const Ghost = styled(ButtonStyled)`
    background: transparent;
    color: ${({ theme }) => theme.colors.gray["700"]};
    border: 1px solid transparent;

    :hover {
        background: ${({ theme }) => theme.colors.gray["100"]};
    }
`;

export const Link = styled(ButtonStyled)`
    background: transparent;
    color: ${({ theme }) => theme.colors.gray["600"]};
    border: 1px solid transparent;

    :hover {
        text-decoration: underline;
    }
`;

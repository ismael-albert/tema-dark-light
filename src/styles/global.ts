import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
background-color: ${(props) => props.theme.colors.secundary};
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: sans-serif;
`;

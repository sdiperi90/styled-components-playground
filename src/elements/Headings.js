import styled from "styled-components";

export const ScH1 = styled.h1`
    font-size: 32px;
`;

const fontSizeMap = {
    h1: "32px",
    h2: "28px",
    h3: "24px"
};
export const MainHeader = styled.h1`
    font-size: ${props =>
        fontSizeMap[props.header] ? fontSizeMap[props.header] : "32px"};
`;

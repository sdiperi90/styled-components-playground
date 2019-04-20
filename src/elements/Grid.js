import styled from "styled-components";

export const ScGrid = styled.div`
    display: grid;
    background: orangered;
    grid-gap: 5px;
    width: 633;
    height: 458px;

    grid-template-rows: auto;
    grid-template-columns: auto;
`;
export const ScGridCol = styled.div`
    background: aqua;
    width: ${props => props.width};
    height: ${props => props.height};
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
`;

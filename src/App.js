import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { fadeIn } from "./animations/header-animation";
import { getTheme } from "./themes";
import { ScH1, MainHeader, ScGrid, ScGridCol } from "./elements";

const ScApp = styled.div`
    background-color: ${props => props.theme.colors.buy.primary};
    animation: 1s ${fadeIn} linear;

    &:hover {
        background-color: green;
    }
`;
const ScAppH1 = styled(ScH1)`
    color: red;
    font-size: 60px;
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={getTheme()}>
                <ScGrid>
                    <ScGridCol row="1/2" column="1/2">
                        a
                    </ScGridCol>
                    <ScGridCol row="2/3" column="1/2">
                        b
                    </ScGridCol>
                    <ScGridCol row="3/4" column="1/2">
                        c
                    </ScGridCol>
                </ScGrid>
            </ThemeProvider>
        );
    }
}

export default App;

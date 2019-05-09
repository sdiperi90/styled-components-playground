import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { fadeIn } from "./animations/header-animation";
import { getTheme } from "./themes";
import {
    ScH1,
    MainHeader,
    ScGrid,
    ScGridCol,
    ScRbContainer,
    ScRbSubContainer,
    ScRbLabel,
    ScRbInput,
    ScRbSpan
} from "./elements";

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
                <ScRbContainer>
                    <ScRbSubContainer>
                        <ScRbInput type="radio" id="small" name="size" />
                        <ScRbLabel for="small">
                            <ScRbSpan />
                            Small Tour Group
                        </ScRbLabel>
                    </ScRbSubContainer>
                    <ScRbSubContainer>
                        <ScRbInput type="radio" id="large" name="size" />
                        <ScRbLabel for="large">
                            <ScRbSpan />
                            Large Tour Group
                        </ScRbLabel>
                    </ScRbSubContainer>
                </ScRbContainer>
            </ThemeProvider>
        );
    }
}

export default App;

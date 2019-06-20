import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { fadeIn } from "./animations/header-animation";
import { getTheme } from "./themes";
import "./CSS/styles.css";
import "./CSS/styles.scss";
import {
    ScH1,
    MainHeader,
    ScGrid,
    ScGridCol,
    ScRbContainer,
    ScRbSubContainer,
    ScRbLabel,
    ScRbInput,
    ScRbSpan,
    ScTextFieldForm,
    ScTextFieldInput,
    ScTextFieldLabel,
    ScSubContainer,
    ScTextFieldSpan,
    GridLayout,
    ScSelectDropdown,
    ScMultipleSelect,
    ScSingleSelect,
    ScDropdownButton,
    ScDropdown
} from "./elements";
import TextField2 from "./elements/TextField2";
import DropdownMenu from "./elements/DropdownMenu";
import DropdownMenu2 from "./elements/DropdownMenu2";

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
            <div>
                {/* <ThemeProvider theme={getTheme()}>
                    <ScTextFieldForm>
                        <ScSubContainer>
                            <ScTextFieldInput type="text" required="required" />
                            <ScTextFieldSpan />
                            <ScTextFieldLabel>Password</ScTextFieldLabel>
                        </ScSubContainer>
                    </ScTextFieldForm>
                </ThemeProvider>
                <TextField2 error={""} />
                <DropdownMenu />
                <DropdownMenu2 /> */}
                {/* <GridLayout /> */}

                {/* <ScSelectDropdown label={"x"} style={{ overflowY: "scroll" }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </ScSelectDropdown> */}

                {/* <ScMultipleSelect /> */}
                {/* <ScSingleSelect label={"test label"}> */}
                {/* <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option> */}
                {/* </ScSingleSelect> */}

                <div>
                    <ScDropdown
                        label="React Select"
                        placeholder="Pick one"
                        options={[
                            { value: "Rock" },
                            { value: "Paper" },
                            { value: "Scissors" }
                        ]}
                    />
                    <span style={{ display: "inline-block", width: 20 }} />
                    <ScDropdown
                        label="React Multiple Select"
                        placeholder="Pick some"
                        options={[
                            { value: "Rock" },
                            { value: "Paper" },
                            { value: "Scissors" }
                        ]}
                        multiple
                    />
                    <span style={{ display: "inline-block", width: 20 }} />
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import styled from "styled-components";

// ****body*****
export const ScDropdownContainer = styled.div`
    position: relative;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

/////wrap/////
export const ScScWrap = styled.div`
    position: absolute;
    right: 0;
    top: 40%;
    width: 350px;
    left: 0;
    margin: 0 auto;
`;

//////select///////
export const ScSubContainer = styled.div`
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    position: relative;
    width: 350px;
    .select-text {
        appearance: none;
        -webkit-appearance: none;
    }
    &:after {
        position: absolute;
        top: 18px;
        right: 10px;
        width: 0;
        height: 0;
        padding: 0;
        content: "";
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid rgba(0, 0, 0, 0.12);
        pointer-events: none;
    }
`;

///////select-label/////
export const ScLabel = styled.label`
    color: rgba(0, 0, 0, 0.26);
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 0.2s ease all;
`;

//////select-text///////
export const ScSelect = styled.select`
    appearance: none;
    -webkit-appearance: none;

    position: relative;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-style: solid;
    border-width: 1px;
    border-radius: 7px;
    border-color: ${props => (props.error ? "red" : "lightgray")};
    margin: 0;
    transition: 300ms ease-in all;

    &:focus {
        border-color: ${props => (props.error ? "red" : "black")};
        outline: none;
    }
    &:focus ~ ${ScLabel}, &:valid ~ ${ScLabel} {
        color: #2f80ed;
        top: -20px;
        left: 10px;
        transition: 0.2s ease all;
        font-size: 14px;
    }
`;

class DropdownMenu extends Component {
    render() {
        return (
            <div>
                <ScDropdownContainer>
                    <ScScWrap>
                        <ScSubContainer>
                            <ScSelect required>
                                <option value="" selected />
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </ScSelect>

                            <ScLabel>Select</ScLabel>
                        </ScSubContainer>
                    </ScScWrap>
                </ScDropdownContainer>
            </div>
        );
    }
}

export default DropdownMenu;

import React, { Component } from "react";
import styled from "styled-components";

// export const ScTextFieldForm = styled.form`
//     width: 320px;
//     margin: 45px auto;
// `;

export const ScSubContainer = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const ScTextFieldInput = styled.input`
    width: 100%;
    font-size: 16px;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
    border-radius: 7px;
    border-color: ${props => (props.error ? "red" : "lightgray")};
    margin: 0;
    transition: 300ms ease-in all;
    &:focus {
        border-color: ${props => (props.error ? "red" : "blue")};
        outline: none;
    }
    &:focus ~ label,
    &:valid ~ label {
        top: -14px;
        font-size: 12px;
        color: blue;
    }
    &:focus ~ span:before {
        width: 320px;
    }
`;

export const ScTextFieldLabel = styled.label`
    color: ${props => (props.error ? "red" : "blue")};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
`;

class TextField2 extends Component {
    render() {
        return (
            <div>
                {/* <ScTextFieldForm> */}
                <ScSubContainer>
                    <ScTextFieldInput
                        error={this.props.error}
                        type="text"
                        required="required"
                    />
                    <ScTextFieldLabel error={this.props.error}>
                        Password
                    </ScTextFieldLabel>
                </ScSubContainer>
                {/* </ScTextFieldForm> */}
            </div>
        );
    }
}

export default TextField2;

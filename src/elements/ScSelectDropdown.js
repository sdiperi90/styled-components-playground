import React, { Component } from "react";
import styled from "styled-components";

//////select///////
export const ScContainer = styled.div`
    /* overflow-x: hidden;
    overflow-y: scroll; */
    position: relative;
    width: 350px;
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
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: 0.2s ease all;
`;

//////select-text///////
export const ScSelect = styled.select`
    appearance: none;
    -webkit-appearance: none;
    background: white;
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
    border-color: aqua;
    margin: 0;
    transition: 300ms ease-in all;

    &:focus {
        border-color: blue;
        outline: none;
    }
    &:focus ~ ${ScLabel}, &:valid ~ ${ScLabel} {
        color: red;
        top: -20px;
        left: 5px;
        transition: 0.2s ease all;
        font-size: 14px;
    }
`;

export class ScSelectDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ""
        };
    }
    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            val: e.target.value
        });
    }
    render() {
        const { onChange, label } = this.props;
        return (
            <ScContainer style={{ marginTop: "20px" }}>
                <ScSelect onChange={onChange} name={label} required>
                    <option value="" defaultValue />
                    {this.props.children}
                </ScSelect>
                <ScLabel htmlFor={label}>{label}</ScLabel>
            </ScContainer>
        );
    }
}

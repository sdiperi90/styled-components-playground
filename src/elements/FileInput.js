import React, { Component } from "react";
import styled from "styled-components";

export const ScTextFieldForm = styled.form`
    width: 320px;
    margin: 45px auto;
    display: block;
    max-width: 60rem;
    margin: 2rem;
`;

export const ScSubContainer = styled.div`
    position: relative;
    /* margin: 45px 0; */
    display: flex;
    width: 60rem;
    padding: 15px;
`;

export const ScTextField = styled.div`
    width: 300px;
    font-size: 16px;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
    /* border-radius: 7px; */
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

export const ScChooseFile = styled.button`
    font: inherit;
    line-height: normal;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.14286em;
    border-width: 2px;
    border-style: solid;

    color: white;
    background: black;
    border-color: black;
    text-shadow: none;
    width: 200px;
`;

export const ScInput = styled.input`
    width: 200px;
    font-size: 16px;
    padding: 10px;
    background-color: red;

    position: absolute;
    top: 0;
    left: 30%;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;
    cursor: pointer;

    width: 200px;

    &:hover + ${ScChooseFile} {
        color: black;
        background: white;
        border-color: black;
        text-shadow: none;
    }
`;

export class FileInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(`Selected file - ${this.fileInput.current.files[0]}`);
    };

    render() {
        return (
            <div>
                <ScTextFieldForm onSubmit={this.handleSubmit}>
                    <ScSubContainer>
                        <ScTextField
                            error={this.props.error}
                            type="text"
                            required="required"
                        />
                        <ScTextFieldLabel error={this.props.error}>
                            Attachment
                        </ScTextFieldLabel>
                        <ScInput type="file" ref={this.fileInput} />
                        <ScChooseFile>Choose File</ScChooseFile>
                    </ScSubContainer>
                </ScTextFieldForm>
            </div>
        );
    }
}

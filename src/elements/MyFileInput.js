import React, { Component } from "react";
import styled, { css } from "styled-components";

export const ScFormWrapper = styled.div`
    position: relative;
    padding: 10px;
    margin: 200px 10px;
`;

export const ScForm = styled.form`
    margin: 0 auto;
    width: 100%;
    display: flex;
`;

export const ScFileName = styled.div`
    display: flex;
    align-items: center;
    flex: 3;
    background: rgba(black, 0.9);
    border: 0.02px solid blue;
`;

export const ScSpan = styled.span`
    display: block;
    padding-left: 15px;
`;

export const ScInput = styled.input`
    background: blue;
    position: absolute; // hide and stretch
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    opacity: 0;
    cursor: pointer;
`;

export const ScButton = styled.button`
    width: ${({ width }) => (width ? width : "auto")};
    height: ${({ height }) => (height ? height : "auto")};
    /* border-radius: 4px; */
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.2rem;

    &:hover {
        position: relative;
        transform: translateY(-1px);
        background: white;
        color: black;
    }
    &:active {
        position: relative;
        transform: translateY(2px);
    }
    &:focus {
        outline: none;
    }
`;

export const ScFloatingLabel = styled.label`
    color: blue;

    /* position: absolute; */
    /* opacity: 0; */

    height: 100%;

    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: all 0.2s linear;
    top: 0;
    left: 10px
        ${props => {
            return props.attached
                ? css`
                      position: absolute;
                      top: -28px;
                      left: 0;
                  `
                : css`
                      top: 0;
                  `;
        }};
`;

export class MyFileInput extends Component {
    state = {
        inputFile: "",
        attached: false
    };

    handleFileInput = e => {
        if (e.target.files.length > 0) {
            let inputFile = e.target.files[0].name;
            const fileList = this.files;
            this.setState({
                inputFile,
                attached: true
            });
        }
    };

    render() {
        return (
            <ScFormWrapper>
                <ScForm>
                    <ScFileName>
                        <ScFloatingLabel
                            attached={this.state.attached}
                            for="file"
                        >
                            Attachment
                        </ScFloatingLabel>
                        <ScSpan>{this.state.inputFile}</ScSpan>
                        <ScInput
                            type="file"
                            name="file"
                            size="40"
                            onChange={this.handleFileInput}
                        />
                    </ScFileName>
                    <ScButton>Choose File</ScButton>
                </ScForm>
            </ScFormWrapper>
        );
    }
}

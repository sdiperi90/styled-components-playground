import React, { Component } from "react";
import styled, { css } from "styled-components";

export const ScOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    top: 0;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.8);
    opacity: 1;
    ${props => {
        return props.active
            ? css`
                  opacity: 1;
                  max-height: none;
              `
            : css`
                  opacity: 0;
                  max-height: 0;
              `;
    }}
    transition: all 0.3s linear;
`;

export const ScModalContainer = styled.div`
    margin: 0;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    padding: 40px;
    width: ${({ width }) => (width ? width : "auto")};
    border-radius: 10px;
    ${({ maxWidth }) =>
        maxWidth &&
        css`
            max-width: ${maxWidth};
        `}
    background: white;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${props => {
        return props.active
            ? css`
                  opacity: 1;
                  max-height: none;
              `
            : css`
                  opacity: 0;
                  max-height: 0;
              `;
    }}
    transition: all 0.3s linear;
`;

export const ScButton = styled.div`
    display: inline-block;
    text-align: center;
    padding: 10px 15px;
    margin: 10px;
    background: red;
    font-size: 18px;
    background-color: #efefef;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

    &:hover {
        color: white;
        background: #009bd5;
    }
`;

export const ScSvg = styled.svg`
    width: 15px;
    height: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover {
        fill: white;
    }
`;

export class ScModal extends Component {
    state = {
        active: false
    };

    handleModal = e => {
        console.log("clicked");
        this.setState({
            active: true
        });
    };

    handleCloseModal = e => {
        this.setState({
            active: false
        });
    };

    render() {
        return (
            <div>
                <ScButton onClick={this.handleModal}>Click</ScButton>
                <ScOverlay active={this.state.active}>
                    <ScModalContainer active={this.state.active}>
                        <ScSvg
                            onClick={this.handleCloseModal}
                            viewBox="0 0 64 64"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 64 64"
                        >
                            <path
                                fill="#1D1D1B"
                                d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"
                            />
                        </ScSvg>
                        {this.props.children}
                        <img src="../img/close.svg" alt="" />
                    </ScModalContainer>
                </ScOverlay>
            </div>
        );
    }
}

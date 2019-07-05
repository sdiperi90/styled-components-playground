import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export const ScKeyframes = keyframes`
    0% {
		transform:rotate(0deg)
	}
	100% {
		transform:rotate(360deg)
	}
`;
export const ScContainer = styled.div`
    display: flex;
`;

export const ScClockLoader = styled.div`
    border-radius: 70px;
    border: 3px solid blue;
    position: relative;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    display: block;
    width: 60px;
    height: 60px;

    &:after {
        content: "";
        position: absolute;
        background-color: blue;
        top: 5px;
        left: 48%;
        height: 22px;
        width: 3px;
        border-radius: 5px;
        transform-origin: 50% 97%;
        transform-origin: 50% 97%;
        animation: ${ScKeyframes} 2s linear infinite;
        animation: ${ScKeyframes} 2s linear infinite;
    }

    &:before {
        content: "";
        position: absolute;
        background-color: blue;
        top: 12px;
        left: 48%;
        height: 16px;
        width: 3px;
        border-radius: 5px;
        transform-origin: 50% 94%;
        transform-origin: 50% 94%;
        animation: ${ScKeyframes} 12s linear infinite;
        animation: ${ScKeyframes} 12s linear infinite;
    }
`;

export class ScLoader2 extends Component {
    render() {
        return (
            <div>
                <h1>Loading</h1>
                <ScClockLoader class="clock" />
            </div>
        );
    }
}

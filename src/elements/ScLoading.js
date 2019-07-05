import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export const ScKeyframes = keyframes`
 /* 100% keyframe for  clockwise. 
     use 0% instead for anticlockwise */
     100% {
    -webkit-transform: rotate(360deg);
  }
`;

export const ScWrapper = styled.div`
    display: flex;
    align-items: center;
    color: grey;
    padding: 20px;
    /* position: relative;
    left: 50%;
    top: 50%; */
`;

export const ScLoader = styled.div`
    height: 0;
    width: 0;
    padding: 8px;
    border: 6px solid #ccc;
    border-right-color: #888;
    border-radius: 22px;
    -webkit-animation: ${ScKeyframes} 1s infinite linear;
    /* left, top and position just for the demo! */
`;

export const ScH1 = styled.h1`
    padding: 0 15px;
`;

export class ScLoading extends Component {
    render() {
        return (
            <ScWrapper>
                <ScH1>Loading</ScH1>
                <ScLoader />
            </ScWrapper>
        );
    }
}

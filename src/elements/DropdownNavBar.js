import React, { Component } from "react";
import styled from "styled-components";

export const ScUl = styled.ul`
    list-style: none;
    background-color: #0433ff;
    padding: 20px;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 100%;
    left: 0%;

    opacity: 0;
    /* height: 0; */
    z-index: -1;
    visibility: hidden;
    transform: translateY(-6em);
    transition: all 0.3s ease-in-out 0s, linear 0.3s, z-index 0s linear 0.01s;

    &:hover ${ScUl} {
        /* top: 100%; */
        /* opacity: 1; */
        /* height: auto; */
        visibility: visible;
        opacity: 1;
        z-index: 1;
        transform: translateY(0%);
        transition-delay: 0s, 0s, 0.3s;
    }
`;

export const ScNav = styled.nav`
    font-family: "Noticia Text", serif;
    font-weight: 400;
    background-color: blue;
    color: white;
    width: auto;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    top: 50px;
    left: 50%;
    display: inline-block;
    cursor: pointer;
`;

export const ScAtag = styled.a`
    background-color: blue;
    color: white;
    text-decoration: none;
`;

export const ScLi = styled.li`
    list-style: none;
    background-color: brown;
`;

export class DropdownNavBar extends Component {
    render() {
        return (
            <ScNav id="nav" role="navigation">
                <ScAtag href="">Blog</ScAtag>
                <ScUl>
                    <ScLi>Design</ScLi>
                    <ScLi>HTML</ScLi>
                    <ScLi>CSS</ScLi>
                    <ScLi>JavaScript</ScLi>
                </ScUl>
            </ScNav>
        );
    }
}

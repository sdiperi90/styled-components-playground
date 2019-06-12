import React, { Component } from "react";
import styled, { css } from "styled-components";

const ScDropdownContainer = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const ScSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: flex-start;
    font-family: "Ek Mukta";
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 4px;
    background: #1d1f20;
`;

const ScForm = styled.form`
    position: relative;
    width: 18rem;
    margin-top: 8vh;
`;

const ScInput = styled.input`
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
        border-color: ${props => (props.error ? "red" : "black")};
    }

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    font-family: "Ek Mukta";
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 4px;
    height: 4rem;
    font-size: 1.1rem;
    padding: 1rem;
    /* background-color: #fafcfd; */
    /* border: 3px solid transparent; */
    transition: 0.3s ease-in-out;

    &::-webkit-input-placeholder {
        color: #333;
    }

    &:hover {
        background-color: #dcdcdc;
        cursor: pointer;

        &::-webkit-input-placeholder {
            color: #333;
        }
    }

    &:focus {
        box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
        outline: 0;
        background-color: white;
        color: #000;

        &::-webkit-input-placeholder {
            color: #000;
        }
    }

    ${({ open }) => {
        return (
            open &&
            css`
                box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
                outline: 0;
                background-color: white;
                color: #000;

                &::-webkit-input-placeholder {
                    color: #000;
                }
            `
        );
    }}
`;

const ScUl = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    list-style: none;
    margin-top: 102px;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    max-height: 0;
    transition: 0.3s ease-in-out;

    ${({ open }) => {
        return (
            open &&
            css`
                max-height: 320px;
                overflow: auto;
            `
        );
    }}
`;

const ScLi = styled.li`
    color: blue;

    position: relative;
    height: 4rem;
    background-color: #fafcfd;
    padding: 1rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
    opacity: 1;

    &:hover {
        background-color: #ff908b;
    }
    ${({ open }) => {
        return (
            !open &&
            css`
                max-height: 0;
                overflow: hidden;
                padding: 0;
                opacity: 0;
            `
        );
    }}
`;

class DropdownMenu2 extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            inputField: "Type to Filter",
            search: ["Alabama", "Alaska", "Arizona"]
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInput(e) {
        this.setState({
            open: true
        });
        console.log("clicked", this.state.inputField.length);
    }

    handleSearch(e) {
        const inputField = e.target.value;
        console.log(inputField);

        this.setState({
            inputField
        });
    }

    handleunfocus() {
        this.setState({
            open: false
        });
    }

    render() {
        return (
            <div>
                {/* <ScDropdownContainer>
                    <ScSubContainer>
                        <ScForm onClick={e => this.handleInput(e)}>
                            {" "}
                            onChange={e => this.handleSearch(e)}
                            <ScInput
                                required
                                open={this.state.open}
                                type="text"
                                placeholder={this.state.inputField}
                                onfocusout={this.handleunfocus()}
                            />
                            <ScUl open={this.state.open}>
                                {this.state.search
                                    .filter(item => {
                                        return (
                                            item.indexOf(
                                                this.state.inputField
                                            ) > -1
                                        );
                                    })
                                    .map(item => {
                                        return (
                                            <ScLi open={this.state.open}>
                                                {item}
                                            </ScLi>
                                        );
                                    })}
                            </ScUl>
                        </ScForm>
                    </ScSubContainer>
                </ScDropdownContainer> */}
            </div>
        );
    }
}

export default DropdownMenu2;

import React, { Component } from "react";
import styled from "styled-components";

export const ScDropdownContainer = styled.div`
    width: 200px;
    margin: 20px auto 0;
`;

export const ScDropdownButton = styled.div`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    height: 100%;
    float: left;
    width: 100%;
    background: whitesmoke;
    padding: 10px 12px;

    cursor: pointer;
    border: 1px solid lightgray;
    box-sizing: border-box;
`;

export const ScDropdownLabel = styled.div`
    float: left;
`;

export const ScDropdownQuantity = styled.div`
    float: left;
    margin-left: 4px;
`;

export const ScDropdownSpan = styled.div``;

export const ScDropdownItalic = styled.i`
    float: right;
`;

export const ScDropdownList = styled.div`
    float: left;
    width: 100%;
    display: ${({ active }) => (active ? "block" : "none")};
    border: 1px solid lightgray;
    border-top: none;
    box-sizing: border-box;
    padding: 10px 12px;

    input[type="search"] {
        padding: 5px 0;
    }

    ul {
        margin: 10px 0;
        max-height: 200px;
        overflow-y: auto;

        input[type="checkbox"] {
            position: relative;
            top: 2px;
        }
    }
`;

export class ScMultipleSelect extends Component {
    state = {
        active: false,
        options: [],
        filter: "",
        filteredOptions: []
    };

    handleDropdownList = e => {
        console.log("working");
        this.setState(prev => {
            return { active: true };
        });
    };

    handleInput = e => {
        let value = e.target.value;
        this.setState(prev => {
            let checked = prev.options.includes(value);
            if (checked) {
                let options = prev.options.filter(option => {
                    return value != option;
                });
                return {
                    options
                };
            } else {
                return {
                    options: [...prev.options, value]
                };
            }
        });
    };

    render() {
        return (
            <ScDropdownContainer
                onClick={e => {
                    this.handleDropdownList(e);
                }}
            >
                <ScDropdownButton>
                    <ScDropdownLabel>States</ScDropdownLabel>
                    <ScDropdownQuantity>
                        <ScDropdownSpan>Any</ScDropdownSpan>
                    </ScDropdownQuantity>
                    <ScDropdownItalic className="fa" />
                </ScDropdownButton>
                <ScDropdownList active={this.state.active}>
                    <ul>
                        <li>
                            <input
                                onChange={this.handleInput}
                                name="ny"
                                value="New York"
                                type="checkbox"
                            />
                            <label htmlFor="ny">New York</label>
                        </li>
                        <li>
                            <input
                                onChange={this.handleInput}
                                name="nj"
                                value="New Jersey"
                                type="checkbox"
                            />
                            <label htmlFor="nj">New Jersey</label>
                        </li>
                        <li>
                            <input
                                onChange={this.handleInput}
                                name="fl"
                                value="Florida"
                                type="checkbox"
                            />
                            <label htmlFor="fl">Florida</label>
                        </li>
                        <li>
                            <input
                                onChange={this.handleInput}
                                name="co"
                                value="Colorado"
                                type="checkbox"
                            />
                            <label htmlFor="co">Colorado</label>
                        </li>
                    </ul>
                </ScDropdownList>
            </ScDropdownContainer>
        );
    }
}

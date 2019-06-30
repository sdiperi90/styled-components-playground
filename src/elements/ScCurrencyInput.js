import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const ScText = styled.p.attrs({
    "data-test-id": props => (props.testId ? props.testId : "text")
})`
    font-size: 1rem;
    font-family: ${({ theme }) => theme.typography.main};
    margin: 0;
    word-wrap: break-word;
`;

export const ScErrorText = styled.span.attrs(({ errorTextTestId }) => {
    return { "data-test-id": errorTextTestId ? errorTextTestId : "error-text" };
})`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.error};
    font-family: ${({ theme }) => theme.typography.main};
    padding-left: 5px;
    display: inline-block;
`;

export const ScTextInputContainer = styled.div`
    position: relative;
    width: ${({ width }) => (width ? width : "auto")};
    margin-top: 0px;
    transition: all 300ms linear;
    ${({ selected, isFocused }) => {
        return (
            (selected || isFocused) &&
            css`
                margin-top: 15px;
            `
        );
    }}
`;

export const ScTextFieldInput = styled.input`
    width: 100%;
    font-size: 16px;
    padding: 10px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
    border-radius: 7px;
    border-color: ${({ theme, error }) =>
        error ? theme.colors.error : "lightgray"};
    margin: 0;
    transition: 300ms ease-in all;
    &:focus {
        border-color: red;
        outline: none;
    }
    &:focus ~ label,
    &:valid ~ label {
        top: -17px;
        left: 5px;
        font-size: 13px;
        color: blue;
    }
    &:focus ~ span:before {
        width: 320px;
    }
`;

export const ScTextInputLabel = styled.label`
    color: green;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: 300ms ease all;
`;

export class ScCurrencyInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
            price: true
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onFocus() {
        this.setState({
            isFocused: true
        });
    }
    onBlur() {
        this.setState({
            isFocused: false
        });
    }

    currencyValidation(e) {
        const validate = /^[1-9][0-9]*([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$/;
        const input = e.target.value;
        console.log(input);
        console.log(validate.test(input));
        this.setState({
            price: validate.test(input)
        });
    }

    render() {
        const {
            error,
            hintText,
            style,
            children,
            value,
            onChange,
            width,
            name,
            type
        } = this.props;
        const { isFocused } = this.state;
        return (
            <ScTextInputContainer
                style={style}
                width={width}
                // selected={value.length > 0}
                isFocused={isFocused}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            >
                <ScTextFieldInput
                    error={error}
                    type="text"
                    required="required"
                    onChange={this.currencyValidation}
                    value={value}
                    name={name || "text-field-input"}
                />
                <ScTextInputLabel error={"error"}>
                    <h1>enter currency</h1>
                </ScTextInputLabel>
                {hintText && <ScText>{hintText}</ScText>}
                {this.state.price ? "" : <ScErrorText>{error}</ScErrorText>}
            </ScTextInputContainer>
        );
    }
}

ScCurrencyInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    hintText: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

// \$?\d{1,3}(,?\d{3})*(\.\d{1,2})?\

// /^[1-9][0-9]*([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$/

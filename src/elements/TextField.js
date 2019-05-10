import styled from "styled-components";

export const ScTextFieldForm = styled.form`
    width: 320px;
    margin: 45px auto;
`;

export const ScSubContainer = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const ScTextFieldInput = styled.input`
    background: none;
    color: black;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 320px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #999;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
    &:focus ~ label,
    &:valid ~ label {
        top: -14px;
        font-size: 12px;
        color: #2196f3;
    }
    &:focus ~ span:before {
        width: 320px;
    }
`;

export const ScTextFieldLabel = styled.label`
    color: #999;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
`;

export const ScTextFieldSpan = styled.span`
    position: relative;
    display: block;
    width: 320px;
    &:before {
        content: "";
        height: 2px;
        width: 0;
        bottom: 0px;
        position: absolute;
        background: #2196f3;
        transition: 300ms ease all;
        left: 0%;
    }
`;

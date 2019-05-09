import styled from "styled-components";

// class="form-group"
export const ScRbContainer = styled.div`
    margin: 200px;
`;

// class="form__radio-group"
export const ScRbSubContainer = styled.div`
    width: 49%;
    display: inline-block;
`;

// class="radio form__radio-label"
export const ScRbLabel = styled.label`
    line-height: 20px;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    padding-left: 45px;
    margin: 15px;
`;

// class="hidden form__radio-input"
export const ScRbInput = styled.input`
    display: none;
    &:checked ~ ${ScRbLabel} ${ScRbSpan}::after {
        opacity: 1;
    }
`;

// class=" label form__radio-button"
export const ScRbSpan = styled.span`
    height: 20px;
    width: 20px;
    border: 3px solid #225cff;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -4px;

    &::after {
        content: "";
        display: block;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #225cff;
        opacity: 0;
        transition: opacity 0.2s;
    }
`;

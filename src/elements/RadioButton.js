import styled from "styled-components";

// class="form-group"
export const ScRbContainer = styled.div`
    margin: 100px;
    &:hover span::after {
        transform: scale(3.6);
    }
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
        transform: scale(1);
        transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
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
        position: absolute;
        top: 18%;
        left: 18%;
        height: 13px;
        width: 13px;
        border-radius: 100%;
        background-color: #225cff;
        display: block;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
        /* on hover it gives slight highlight to the blue dot */
        opacity: 0.08;
        pointer-events: none;
        /* transition time for blue dot disappear */
        transition: opacity 0.1s;
    }
`;

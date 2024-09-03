import React from 'react'
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';

export default function Button({label, Icon, className, version="normal", onClick}) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
        <span>{label}</span>
        <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    ${(props) => props.version === "normal" && extraStylePrimary};
    ${(props) => props.version === "success" && extraStyleSuccess};

    ${({version}) => extraStyle[version]};
    
`

const extraStylePrimary = css`
     width: 100%;
            border: 1px solid red;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            position: relative;
            white-space: nowrap;
            text-decoration: none;
            line-height: 1;

            padding: 18px 24px;
            border-radius: 5px;
            font-size: 15px;
            font-weight: 700;
            color: white;
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
            
        

        &:hover:not(:disabled){
            background-color: white;
            color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
            transition: all 200ms ease-out;
        }
    

        &:active{
            color: white;
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
        }

        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }

        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            /* margin-left: 10px; */
        }
`

const extraStyleSuccess = css`
    cursor: pointer;
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};
    height: 35px;
    padding: 0 1.5em;
    font-weight: ${theme.weights.semiBold};
    &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }
    &:active {
        color: ${theme.colors.white};
        background: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }

`

const extraStyle = {
    primary: extraStylePrimary,
    success: extraStyleSuccess
}
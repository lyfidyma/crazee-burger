import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled>
        <span>{label}</span>
        {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
    
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
            font-size: 15px;
            margin-left: 10px;
        }
    
`
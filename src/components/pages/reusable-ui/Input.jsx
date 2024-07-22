import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function Input({value, onChange, Icon, ...extraProps}) {

    
  return (
    <InputStyled>
            {Icon && Icon}
                <input 
                    type='text'
                    value={value}
                    onChange={onChange} 
                    {...extraProps}
                  />
            </InputStyled>
  )
}

const InputStyled = styled.div`
        background-color: #ffff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        .icon{
            font-size: 15px;
            margin-right: 8px;
            color: ${theme.colors.greyMedium};
        }

        input{
            border: none;
            font-size: 15px;
            color: #17161a;
            width: 100%;
        }

        &::placeholder{
            background: white;
            color: ${theme.colors.greyMedium};
        }
    
`


import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function Input({value, onChange, Icon, className, ...extraProps}) {

    
  return (
    <InputStyled className={className}>
            <div className="icon">{Icon && Icon}</div>
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
        background-color: ${theme.colors.white};
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;

        .icon{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: ${theme.fonts.SM};
          margin: 0 8px 0 10px;
          color: ${theme.colors.greySemiDark};
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


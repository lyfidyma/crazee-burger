import React, { version } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../theme'

export default function Input({value, onChange, Icon, className, version="normal", ...extraProps}) {

    
  return (
    <InputStyled className={className} version={version}>
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
            /* background: white; */
            color: ${theme.colors.greyMedium};
        }
    ${(props) => {
      if(props.version === "normal") return extraStyleNormal
      if(props.version === "minimalist") return extraStyleMinimalist
    }}
`
const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraStyleMinimalist = css `
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
    outline: 0;
    }
  }
`
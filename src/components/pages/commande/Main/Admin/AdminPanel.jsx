import React, { useContext } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../theme'
import OrderContext from '../../../../../context/OrderContext'
import { getTabSelected, tabsConfig } from './tabsConfig'

export default function AdminPanel() {

  const { currentTabSelected } = useContext(OrderContext)
  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected)
  return (
    <AdminPanelStyled>
      <p>{ tabSelected && tabSelected.label }</p>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    p {
    padding: 0 20px;
  }
`
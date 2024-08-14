import React, { useContext } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import OrderContext from '../../../../../../context/OrderContext.jsx'
import { getTabSelected, tabsConfig } from '../tabsConfig.jsx'

export default function AdminPanel() {

  const { currentTabSelected } = useContext(OrderContext)
  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected)
  return (
    <AdminPanelStyled>
      { tabSelected && tabSelected.Content }
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    padding: 30px 5%;
    
`
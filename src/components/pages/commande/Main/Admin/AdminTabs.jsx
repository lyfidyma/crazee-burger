import React, { useContext } from 'react'
import styled from 'styled-components';
import Tab from '../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { getTabsConfig } from './tabsConfig';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs() {


        // const handleClick = () => {
        //     setIsCollapsed(!isCollapsed)
        // }

        // state
        const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } = useContext(OrderContext)
        

        // comportements
        const selectTab = (tabSelected) => {
            setIsCollapsed(false)
            setCurrentTabSelected(tabSelected)
        }

        const tabs = getTabsConfig()
        
  return (
    <AdminTabsStyled>
        <Tab 
            index="chevron"
            label=""
            Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown/>} 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={isCollapsed ? "is-active" : ""}
        />
        {tabs.map((tab) => (
        <Tab 
            key={tab.index}
            index={tab.index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
        />
    ))}
       
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;

    .is-active{
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
    }

    button {
    margin-left: 1px;
  }
  
`;
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "/",
      label: 'MyTasks'
    },
    {
      key: "menu",
      label: 'Home'
    },
   
    {
      key: "login",
      label: 'Login'
    }
  ];
  
  return (
    <Menu items={menuItems} onClick={(menuItem) => navigate(menuItem.key)}/>
  )
};

export default SideMenu;
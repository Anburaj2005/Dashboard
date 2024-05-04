import React from 'react';
import { Menu } from 'antd';
import { useEffect, useState } from "react";
import { AppstoreOutlined, ShoppingOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { useNavigate,useLocation } from 'react-router-dom';

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className='SideMenu'>
      <Menu
      className="SideMenuVertical"
      mode="vertical"
        onClick={(item) => { navigate(item.key) }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dasboard",
            icon: <AppstoreOutlined />,
            key: "/"
          },

          {
            label: "Inventroy",
            icon: <ShoppingOutlined />,
            key: "/inventroy"
          },

          {
            label: "order",
            icon: <ShoppingCartOutlined />,
            key: "/order"
          },

          {
            label: "Customer",
            icon: <UserOutlined />,
            key: "/customer",
          },


        ]}>

      </Menu>
    </div>
  )
}

export default SideMenu
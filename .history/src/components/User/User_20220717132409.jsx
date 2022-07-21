import React from 'react';
import { useMoralis } from 'react-moralis';
import { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const styles = {
    item: {
      display: "flex",
      alignItems: "center",
      height: "42px",
      fontWeight: "500",
      fontFamily: "Roboto, sans-serif",
      fontSize: "14px",
      padding: "0 10px",
    },
    button: {
      border: "2px solid rgb(231, 234, 243)",
      borderRadius: "12px",
    },
};

const userType = [
    {
        key: "0",
        value: "Student",
    },
    {
        key: "1",
        value: "Educator",
    }
];



const User = () => {
    const [key, setKey] = useState("1");
    const [selected, setSelected] = useState({});

    useEffect(() => {
        const newSelected = userType.find((item) => item.key === key);
        setKey(newSelected);
        console.log("current key: ", key)
    }, [key])

    const handleMenuClick = (e) => {
        console.log("switch to: ", e.key);
    }
    
    const menu = (
        <Menu onClick={handleMenuClick}>
            {userType.map((item) => (
                <Menu.item key={item.key} style={styles.item}>
                    <span style={{ marginLeft: "5px" }}>{item.value}</span>
                </Menu.item>
            ))}
        </Menu>
    )

    return (
        <div>
            <Dropdown overlay={menu} trigger={["click"]}>
                <Button
                    key={selected?.key}
                    icon={selected?.icon}
                    style={{ ...styles.button, ...styles.item }}
                    >
                    <span style={{ marginLeft: "5px" }}>{selected?.value}</span>
                    <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    )
}

export default User
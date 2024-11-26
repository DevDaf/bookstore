"use client";
import { useSelector } from "react-redux";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

export function UserDropdown({ logoutHandler }) {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  
  return (
    <Dropdown label={ userInfo.name } dismissOnClick={false}>
      <Link to="/order-history">
        <Dropdown.Item>Order History</Dropdown.Item>
      </Link>
      <Link to="/bookmarks">
        <Dropdown.Item>Bookmarks</Dropdown.Item>
      </Link>
      <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

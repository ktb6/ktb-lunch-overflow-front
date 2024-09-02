"use client";
import React from "react";
import Link from "next/link";
import styles from "./BottomNavigation.module.scss";
import { IoHomeOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "홈",
    path: "/",
    icon: <IoHomeOutline size={24} />,
  },
  {
    label: "추천 내역",
    path: "/history",
    icon: <IoCalendarOutline size={24} />,
  },
  {
    label: "팀 추천",
    path: "/team",
    icon: <IoPeopleOutline size={24} />,
  },
  {
    label: "내 정보",
    path: "/user",
    icon: <IoPersonOutline size={24} />,
  },
];

const BottomNavigation = () => {
  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          passHref
          className={styles.navItem}
        >
          {item.icon}
          <div>{item.label}</div>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;

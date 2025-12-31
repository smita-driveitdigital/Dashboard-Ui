import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { UserRound, Handshake, CalendarRange, Bookmark  } from 'lucide-react';
import './sidebar.css'
export default function Sidebar() {
    const SidebarItem = [
        {
            icon: UserRound,
            lable: "Dashboard",
            href: "/"
        },
        {
            icon: Handshake,
            lable: "Contribution",
            href: "/",
        },
        {
            icon: CalendarRange,
            lable: "Add Event",
            href: "/",
        },
        {
            icon: Bookmark,
            lable: "Bookmark",
            href: "/",
        }
    ]
    return (
        <div>
            <aside>
                <BrowserRouter>
                    <ul className="menuList">
                        {SidebarItem.map((item, index) => {
                            return (
                                <li key={index} className="">
                                    <Link to={item.href}><item.icon className="d-flex h-5 w-5 flex-shrink-0 me-2" size={20} />{item.lable}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </BrowserRouter >
            </aside>
        </div>
    )
}
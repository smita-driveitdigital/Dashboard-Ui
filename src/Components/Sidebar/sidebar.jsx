import React from "react";
import { BrowserRouter, href, Link } from "react-router-dom";
import { UserRound, Handshake, CalendarRange, Bookmark } from 'lucide-react';
import './sidebar.css'
export default function Sidebar() {
    const SidebarItem = [
        {
            icon: UserRound,
            label: "Dashboard",
            href: "/"
        },
        {
            icon: Handshake,
            label: "Contribution",
            href: "/",
        },
        {
            icon: CalendarRange,
            label: "Attend Events",
            href: "/",
        },
        {
            icon: Bookmark,
            label: "Bookmarks",
            href: "/",
        },
        {
            icon: Bookmark,
            label: "Following",
            href: '/',
        },
        {
            icon: Bookmark,
            label: "Newsletters",
            href: '/',
        },
        {
            icon: Bookmark,
            label: "Edit Profile",
            href: '/',
        },
        {
            icon: Bookmark,
            label: 'Change Password',
            href: '/',
        },
        {
            icon: Bookmark,
            label: 'Contact Us',
            href: '/',
        },
        {
            icon: Bookmark,
            label: 'Logout',
            href:'/',
        }
    ]
    return (
        <div className="sidebar">
            <aside>
                <BrowserRouter>
                    <h1 className="sidebar-title font-bold">The Asian banker</h1>
                    <ul className="menuList ps-0">
                        {SidebarItem.map((item, index) => {
                            return (
                                <li key={index} className="">
                                    <Link to={item.href} className="d-flex align-items-center"><item.icon className="d-flex h-5 w-5 flex-shrink-0 me-2" size={20} />{item.label}</Link>
                                </li>
                            )
                        })}
                        <li>
                            <div className="card-help">
                        <h4>Need Help?</h4>
                        <p className="mb-0"><a href="/">Visit our Help Center</a> or <a href="/">Contact us</a>.</p>
                    </div>
                        </li>
                    </ul>
                    
                </BrowserRouter >
            </aside>
        </div>
    )
}
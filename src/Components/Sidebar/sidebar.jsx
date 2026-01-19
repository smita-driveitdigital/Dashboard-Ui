import React from "react";
import {Link } from "react-router-dom";
import { UserRound, Handshake, CalendarRange, Bookmark } from 'lucide-react';
import './sidebar.css'
export default function Sidebar({ activePage, setActivePage }) {
    const SidebarItem = [
        {
            id: "my-account",
            icon: UserRound,
            label: "My Account",
            href: "/"
        },
        {
            id: "contribution",
            icon: Handshake,
            label: "Contribution",
            href: "/",
        },
        {
            id: "attend-events",
            icon: CalendarRange,
            label: "Attend Events",
            href: "/",
        },
        {
            id: "bookmarks",
            icon: Bookmark,
            label: "Bookmarks",
            href: "/",
        },
        {
            id: "following",
            icon: Bookmark,
            label: "Following",
            href: '/',
        },
        {
            id: "newsletters",
            icon: Bookmark,
            label: "Newsletters",
            href: '/',
        },
        {
            id: "edit-profile",
            icon: Bookmark,
            label: "Edit Profile",
            href: '/',
        },
        {
            id: "change-password",
            icon: Bookmark,
            label: 'Change Password',
            href: '/',
        },
        {
            id: "contact-us",
            icon: Bookmark,
            label: 'Contact Us',
            href: '/',
        },
        {
            id: "logout",
            icon: Bookmark,
            label: 'Logout',
            href:'/',
        }
    ]
    return (
        <div className="sidebar"> 
            <aside>
                <div>
                    <h1 className="sidebar-title font-bold">The Asian banker</h1>
                    <ul className="menuList ps-0">
                        {SidebarItem.map((item, index) => {
                            return (
                                <li key={index} className={activePage === item.id ? "active" : ""} onClick={() => setActivePage(item.id)}>
                                    <div className="d-flex align-items-center"><item.icon className="d-flex h-5 w-5 flex-shrink-0 me-2" size={20} />{item.label}</div>
                                </li>
                            )
                        })}
                        <li>
                            <div className="card-help">
                        <h5>Need Help?</h5>
                        <p className="mb-0"><a href="/">Visit our Help Center</a> or <a href="/">Contact us</a>.</p>
                    </div>
                        </li>
                    </ul>
                    
                </div>
            </aside>
        </div>
    )
}
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import { BellIcon, BookOpenIcon, CalendarIcon, CommentQuestionIcon, EyeIcon, FileEditIcon, LogoIcon } from "@assets/icon/dashboardIcon";


interface IDefaultLayoutProps {
    onClick: any,
}

const dashboardArr = [
    {
        menuItem: 'Tổng quan', link: '/overview', icon: <EyeIcon fill="white" className="icon__color" />,
        submenuItem: []
    },
    {
        menuItem: 'Quản lý lớp học', link: '/classmanagement', icon: <BookOpenIcon fill="white" className="icon__color" />,
        submenuItem: [] = [
            { name: "Danh sách lớp học", link: '/classmanagement/classlist' },
            { name: "Thêm buổi học mới", link: '/classmanagement/addclass' },
            { name: "Tham gia vào lớp học", link: '/classmanagement/joinclass' }
        ]
    },
    {
        menuItem: 'Bài kiểm tra', link: '/test', icon: <FileEditIcon fill="white" className="icon__color" />,
        submenuItem: [
            { name: 'Danh sách bài kiểm tra', link: '/test/testlist' },
            { name: 'Thêm bài kiểm tra mới', link: '/test/addtest' },
            { name: 'Nhập điểm', link: '/test/addgrade' },
            { name: 'Bảng điểm', link: '/test/record' }]
    },
    {
        menuItem: 'Lịch thi', link: '/schedule', icon: <CalendarIcon fill="white" className="icon__color" />,
        submenuItem: []
    },
    {
        menuItem: 'Thông báo', link: '/notification', icon: <BellIcon fill="white" className="icon__color" />,
        submenuItem: []
    },
    {
        menuItem: 'Trợ giúp', link: '/help', icon: <CommentQuestionIcon fill="white" className="icon__color" />,
        submenuItem: []
    },
]



const DashboardLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (props) => {

    const [showSubmenu, setShowSubmenu] = useState(false);
    const expand=()=> {
        setShowSubmenu(true);
    }

    const close=()=> {
        setShowSubmenu(false);
    }

    return (
        <div className="dashboard-page d-flex" onBlur={close} >
            <div className="dashboard__sider">
                <LogoIcon fill="white" className="sider__logo" />
                <div className="d-flex flex-column align-items-center dashboard__sider__content">
                    {dashboardArr.map((item, index) => <NavLink key={index} to={item.link} className="sider__item" activeClassName="sider__item__active"
                        onClick={expand}>
                        {item.icon}
                    </NavLink>)}
                </div>
            </div>
            {!showSubmenu ? null : <div className="dashboard__submenu d-flex flex-column">
                {dashboardArr.map((item, index) => {
                    return <div className="d-flex flex-column" key={index}>
                        <NavLink to={item.link} className="submenu__item" activeClassName="submenu__item__active"
                            onClick={close}
                        >
                            {item.icon}{item.menuItem}
                        </NavLink>
                        {item.submenuItem.map((item, index) => {
                            return <NavLink to={item.link} className="submenu__item__small" activeClassName="submenu__item__small__active"
                                onClick={close}
                            >
                                {item.name}
                            </NavLink>
                        })}
                    </div>
                })}
            </div>}

            <div className="w-100">
                {props.children}
            </div>
        </div>

    );
};

export default React.memo(DashboardLayout);

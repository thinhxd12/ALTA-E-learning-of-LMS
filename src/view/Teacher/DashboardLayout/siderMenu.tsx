import { UserOutlined } from '@ant-design/icons'
import RightMenu from '@layout/RightMenu'
import PlayIconComponent from '@shared/components/PlayIcon/index'
import { Menu } from 'antd'
import React from 'react'

export default function SiderMenu() {
    return (
        <div className="">
            <Menu.Item><UserOutlined />Tổng quan</Menu.Item>
            <Menu.Item><UserOutlined />Quản lý lớp học</Menu.Item>
            <Menu.Item>Danh sách lớp học</Menu.Item>
            <Menu.Item>Thêm buổi học mới</Menu.Item>
            <Menu.Item>Tham gia vào lớp học</Menu.Item>
            <Menu.Item><UserOutlined />Bài kiểm tra</Menu.Item>
            <Menu.Item>Danh sách bài kiểm tra</Menu.Item>
            <Menu.Item>Thêm bài kiểm tra mới</Menu.Item>
            <Menu.Item>Nhập điểm</Menu.Item>
            <Menu.Item>Bảng điểm</Menu.Item>
            <Menu.Item><UserOutlined />Lịch thi</Menu.Item>
            <Menu.Item><UserOutlined />Thông báo</Menu.Item>
            <Menu.Item><UserOutlined />Trợ giúp</Menu.Item>
            {/* <RightMenu/> */}
        </div>
    )
}

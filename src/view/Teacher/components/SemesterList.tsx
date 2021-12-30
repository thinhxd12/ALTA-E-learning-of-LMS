import React from 'react'
import { Collapse } from 'antd';
import { CaretDownIcon, CaretRightIcon, InfoIcon } from '@assets/icon/dashboardIcon';

const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}

const subjectArr = [
    { name: 'Toán Đại Số', class: 'Lớp 10A1', time: 'Thứ 2 - 8:00', date: '12/05 - 30/07', result: false },
    { name: 'Ngữ Văn', class: 'Lớp 10A1', time: 'Thứ 2 - 8:00', date: '12/05 - 30/07', result: false },
    { name: 'Lịch Sử', class: 'Lớp 10A1', time: 'Thứ 2 - 8:00', date: '12/05 - 30/07', result: false },
    { name: 'Tiếng Anh', class: 'Lớp 10A1', time: 'Thứ 2 - 8:00', date: '12/05 - 30/07', result: true },
    { name: 'Toán Hình Học', class: 'Lớp 10A1', time: 'Thứ 2 - 8:00', date: '12/05 - 30/07', result: true },
    { name: 'Địa Lý', class: 'Lớp 10A1', time: 'Thứ 2 - 8:00', date: '12/05 - 30/07', result: true },
    { name: 'Vật Lý', class: 'Lớp 10A1', time: 'Thứ 2 - 8:00', date: '12/05 - 30/07', result: true },
    { name: 'Hóa Học', class: 'Lớp 10A1', time: 'Thứ 2 - 8:00', date: '12/05 - 30/07', result: true },
];

export default function SemesterList() {
    return (
        <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={({ isActive }) => isActive ? <CaretDownIcon fill="white" /> : <CaretRightIcon fill="#FF7506" />}>
            <Panel header="Học kỳ II - 2020" key="1">
                <div className="">
                    {subjectArr.map((item, index) => {
                        return <div key={index} className="row">
                            <div className="col-2">{item.name}</div>
                            <div className="col-2">{item.class}</div>
                            <div className="col-2">{item.time}</div>
                            <div className="col-2">{item.date}</div>
                            <div className="col-2">{!item.result?"Chưa hoàn thành":"Đã hoàn thành"}</div>
                            <div className="col-2"><InfoIcon fill="#FF7506" /></div>
                        </div>
                    })}

                </div>
            </Panel>
            <Panel header="Học kỳ I - 2020" key="2">
            </Panel>
        </Collapse>

    )
}



import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/charts';

const PieChart = () => {
  const data = [
    {
      type: 'Tổng số học sinh khá',
      value: 25,
    },
    {
      type: 'Tổng số học sinh trung bình',
      value: 15,
    },
    {
      type: 'Tổng số học sinh giỏi',
      value: 60,
    },

  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color: ['l(90) 0:#FDC830 0.4792:#F37335', 'l(270) 0.15:#5545B6 1:#D05BE3', 'l(270) 0:#56CCF2 1:#2F80ED',],
    radius: 0.75,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 18,
        fontFamily: 'Source Sans Pro',
        fontWeight: 600,
        textAlign: 'center',
        letterSpacing: '1.5%',
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    legend: {
      position: 'bottom',
      layout: 'vertical',
      
      
    },


  };
  return (
    <div className="pie__chart">
      <h2 className="overview__title">Thống kê kết quả học tập của học viên</h2>
      <div className="row">
        <div className="col-6">
          <Pie {...config} />

        </div>
        <ul className="col-6">
          <li>Tổng số lớp: <span>10</span></li>
          <li>Tổng số học sinh giỏi: <span>300</span></li>
          <li>Tổng số học sinh khá: <span>125</span></li>
          <li>Tổng số học sinh trung bình: <span>75</span></li>
          <li>Tổng số học sinh yếu: <span>0</span></li>
        </ul>
      </div>
    </div>
  )
};

export default PieChart;
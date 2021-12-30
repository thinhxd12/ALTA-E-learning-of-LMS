import { Line } from "@ant-design/charts";
import React from "react";
import OverviewStats from "../components/OverviewStats";
import PieChart from "../components/PieChart";
import SemesterList from "../components/SemesterList";

const overviewArr = [
    { name: 'Khóa học của tôi', value: 10 },
    { name: 'Lớp học Online', value: 2 },
    { name: 'Bài kiểm tra chưa chấm', value: 8 },
    { name: 'Hỏi đáp Q & A', value: 5 },
]

const Overview = () => {

    return (
        <>
            <div className="overview">
                <div className="row">
                    <div className="col-5">
                        <OverviewStats />
                        <PieChart />

                    </div>
                    <div className="col-7">
                        <h1 className="overview__main__title">Tất cả khóa học</h1>
                        <div>
                            <SemesterList />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}


export default Overview;
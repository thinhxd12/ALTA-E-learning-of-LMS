import React from 'react'

export default function OverviewStats() {
    return (
        <div className="overview__stats">
            <h1 className="overview__main__title row">Tổng quan</h1>
            <div className="row">
                <div className="overview__item"
                    style={{ background: `linear-gradient(270deg, #ff5400 0%, #f17f21 80.56%)` }}>
                    <span className="ellipse1"></span>
                    <span className="ellipse2"></span>
                    <span className="ellipse3"></span>
                    <h4>Khóa học của tôi</h4>
                    <p>10</p>
                </div>
                <div className="overview__item"
                    style={{ background: `linear-gradient(98.91deg, #56CCF2 1.13%, #2F80ED 100%)` }}>
                    <span className="ellipse1"></span>
                    <span className="ellipse2"></span>
                    <span className="ellipse3"></span>
                    <h4>Lớp học Online</h4>
                    <p>2</p>
                </div>
            </div>
            <div className="row">
                <div className="overview__item"
                    style={{ background: `linear-gradient(98.45deg, #FDC830 0%, #F37335 80.32%)` }}>
                    <span className="ellipse1"></span>
                    <span className="ellipse2"></span>
                    <span className="ellipse3"></span>
                    <h4>Bài kiểm tra chưa chấm</h4>
                    <p>8</p>
                </div>
                <div className="overview__item"
                    style={{ background: `linear-gradient(98.89deg, rgba(46, 172, 238, 0.7) 4.77%, rgba(0, 22, 218, 0.7) 96.59%)` }}>
                    <span className="ellipse1"></span>
                    <span className="ellipse2"></span>
                    <span className="ellipse3"></span>
                    <h4>Hỏi đáp Q & A</h4>
                    <p>5</p>
                </div>
            </div>
        </div>
    )
}

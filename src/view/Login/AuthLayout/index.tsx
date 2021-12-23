import { Button, Col, Row } from "antd";
import React, { PropsWithChildren } from "react";
import { useLocation, withRouter } from "react-router-dom";
import { banner, logo, loginBackground, logo1 } from "@shared/assets/images";
import ChangeLanguage from "@shared/components/ChangeLanguage";
import { url } from "inspector";


interface IDefaultLayoutProps {
}

const AuthLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (props) => {
  return (
    <div className="auth-page" style={{ background: `url(${loginBackground})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
      <img src={logo1} alt="logo1" className="banner__img--1" />
      {props.children}
    </div>
  );
};

export default React.memo(AuthLayout);

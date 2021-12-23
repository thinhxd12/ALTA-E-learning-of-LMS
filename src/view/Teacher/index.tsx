
import { Form, Input, Checkbox } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useState, useMemo } from "react";
import { NavLink, useHistory, useLocation, useParams } from "react-router-dom";
import { useAsync } from "@hook/useAsync";
import authenticationPresenter from "@modules/authentication/presenter";
import { useAltaIntl } from "@shared/hook/useTranslate";

// import * as UserLogin from '@shared/assets/icon/index'
// import userLogin from "@shared/assets/icon"

const { login } = authenticationPresenter;
const Dashboard = () => {
  const history = useHistory();
  const location = useLocation();
  const [loginByAccount] = useAsync(login);
  const [checkError, setCheckError] = useState("");
  const { formatMessage } = useAltaIntl()
  const onFinishFailed = (errorInfo: any) => {
    setCheckError("");
  };

  const renderError = useMemo(() => {
    if (checkError == "" || checkError == null) return false;
    return (
      <div className="error-status">
        <ExclamationCircleOutlined />
        <p>{checkError}</p>
      </div>
    );
  }, [checkError]);

  const onSubmitAccount = (values: any) => {
    const remember = values.remember;
    let applicationId = undefined;
    if (location.search !== "") {
      applicationId = location.search.slice(1, location.search.length);
    }
    delete values.remember;
    values = { ...values, applicationId: applicationId };
    document.cookie = `remember_me=${true}; SameSite=None; Secure`;
    loginByAccount
      .execute(values, remember)
      .then((res) => {
        setCheckError("");
        setTimeout(() => {
          history.push("/");
        }, 300);
      })
      .catch((err) => {
        setCheckError(formatMessage("login.page.account.error"));
      });
  };

  const userIcon = <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 14.3676 19.5322 16.509 17.9701 18.0505C17.7519 17.3897 17.4234 16.7668 16.9955 16.2092C16.386 15.4149 15.5951 14.7792 14.6908 14.3534C15.165 13.8936 15.5144 13.3185 15.7022 12.6818C15.9288 11.9139 15.9091 11.0948 15.6458 10.3386C15.3826 9.58239 14.8889 8.92685 14.2339 8.463C13.5788 7.99916 12.7949 7.75 11.9911 7.75C11.1872 7.75 10.4033 7.99916 9.74823 8.463C9.09317 8.92685 8.59954 9.58239 8.33629 10.3386C8.07302 11.0948 8.0533 11.9139 8.27988 12.6818C8.46787 13.3189 8.81762 13.8944 9.29229 14.3543C8.3918 14.7817 7.60469 15.4174 6.99823 16.2106C6.57232 16.7676 6.24541 17.3894 6.0284 18.049C4.46711 16.5076 3.5 14.3669 3.5 12ZM11.569 9.49394C11.9887 9.41093 12.4236 9.45355 12.8188 9.61634C13.214 9.77914 13.5515 10.0547 13.7889 10.408C14.0263 10.7613 14.1529 11.1766 14.1529 11.6012C14.1529 12.1706 13.9255 12.717 13.5202 13.12C13.1149 13.5231 12.5649 13.7498 11.9911 13.7498C11.5632 13.7498 11.145 13.6236 10.7895 13.3874C10.4339 13.1511 10.157 12.8155 9.99358 12.423C9.83013 12.0306 9.78738 11.5988 9.87069 11.1823C9.954 10.7658 10.1597 10.383 10.4619 10.0824C10.7642 9.78181 11.1494 9.57695 11.569 9.49394ZM8.95436 16.6086C9.79274 15.8632 10.8781 15.451 12.0031 15.451C13.1281 15.451 14.2135 15.8632 15.0519 16.6086C15.8186 17.2902 16.3295 18.2067 16.5072 19.208C15.2008 20.0267 13.656 20.5 12 20.5C10.3463 20.5 8.80362 20.028 7.49839 19.2115C7.67551 18.2088 8.18676 17.291 8.95436 16.6086Z" fill="#C9C4C0" />
  </svg>

  const passwordIcon = <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L20.217 2.826C20.4391 2.87536 20.6377 2.99897 20.78 3.1764C20.9224 3.35384 21 3.57452 21 3.802V13.789C20.9999 14.7767 20.756 15.7492 20.2899 16.62C19.8238 17.4908 19.1499 18.2331 18.328 18.781L12 23L5.672 18.781C4.85027 18.2332 4.17646 17.4911 3.71035 16.6205C3.24424 15.7498 3.00024 14.7776 3 13.79V3.802C3.00004 3.57452 3.07764 3.35384 3.21999 3.1764C3.36234 2.99897 3.56094 2.87536 3.783 2.826L12 1ZM12 3.049L5 4.604V13.789C5.00001 14.4475 5.16257 15.0957 5.47326 15.6763C5.78395 16.2568 6.23315 16.7517 6.781 17.117L12 20.597L17.219 17.117C17.7667 16.7518 18.2158 16.2571 18.5265 15.6767C18.8372 15.0964 18.9998 14.4483 19 13.79V4.604L12 3.049ZM12 7C12.4403 6.9998 12.8684 7.14492 13.2179 7.41286C13.5673 7.6808 13.8186 8.05657 13.9326 8.48187C14.0467 8.90718 14.0172 9.35824 13.8488 9.76509C13.6803 10.1719 13.3823 10.5118 13.001 10.732L13 15H11V10.732C10.6187 10.5119 10.3208 10.1721 10.1523 9.76532C9.98384 9.35857 9.95429 8.90761 10.0682 8.48236C10.1822 8.0571 10.4333 7.68133 10.7825 7.41332C11.1318 7.1453 11.5597 7.00002 12 7Z" fill="#C9C4C0" />
  </svg>


  return (
    <>
      <div className="main-form">
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};
export default Dashboard;

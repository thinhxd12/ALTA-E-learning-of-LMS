import { Form, Input } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useState, useMemo, useEffect } from "react";
import { useIntl } from "react-intl";
import { NavLink, useHistory } from "react-router-dom";
import { useAsync } from "@hook/useAsync";
import authenticationPresenter from "@modules/authentication/presenter";
import NavLinkBottom from "../components/NavLinkBottom";

const ForgotPassword = () => {
  const history = useHistory();
  const intl = useIntl();
  const { forgotPass } = authenticationPresenter;
  const [forgotPasscall] = useAsync(forgotPass);

  const [checkError, setCheckError] = useState("");
  const [checkSuccessEmail, setCheckSuccessEmail] = useState<boolean>(false);

  const useTranslate = (key: string) => {
    return intl.formatMessage({ id: key });
  };

  const onFinishFailed = (errorInfo: any) => {
    setCheckError("");
  };


  const [userInfo, setUserInfo] = useState({ userName: '', password: '', style: 'forgot-password-button' });

  const renderError = useMemo(() => {
    if (checkError == "" || checkError == null) return false;
    return (
      <div className="error-status">
        <ExclamationCircleOutlined />
        <p>{checkError}</p>
      </div>
    );
  }, [checkError]);

  const onSubmitEmail = (values: any) => {
    forgotPasscall
      .execute(values)
      .then((res) => {
        setCheckSuccessEmail(true);
      })
      .catch((err) => {
        setCheckError(useTranslate("forgot.password.email.not.exit"));
      });
  };


  const handleChangeUserName = (e) => {
    setUserInfo({ ...userInfo, userName: e.target.value })
  }

  const handleChangePassword = (e) => {
    if((e.target.value!=='')&&(userInfo.userName!=='')){
      setUserInfo({ ...userInfo, style: 'login-button', password: e.target.value })
    }
    else setUserInfo({ ...userInfo, style: 'forgot-password-button' })
    // console.log(userInfo)
  }


  const userIcon = <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 14.3676 19.5322 16.509 17.9701 18.0505C17.7519 17.3897 17.4234 16.7668 16.9955 16.2092C16.386 15.4149 15.5951 14.7792 14.6908 14.3534C15.165 13.8936 15.5144 13.3185 15.7022 12.6818C15.9288 11.9139 15.9091 11.0948 15.6458 10.3386C15.3826 9.58239 14.8889 8.92685 14.2339 8.463C13.5788 7.99916 12.7949 7.75 11.9911 7.75C11.1872 7.75 10.4033 7.99916 9.74823 8.463C9.09317 8.92685 8.59954 9.58239 8.33629 10.3386C8.07302 11.0948 8.0533 11.9139 8.27988 12.6818C8.46787 13.3189 8.81762 13.8944 9.29229 14.3543C8.3918 14.7817 7.60469 15.4174 6.99823 16.2106C6.57232 16.7676 6.24541 17.3894 6.0284 18.049C4.46711 16.5076 3.5 14.3669 3.5 12ZM11.569 9.49394C11.9887 9.41093 12.4236 9.45355 12.8188 9.61634C13.214 9.77914 13.5515 10.0547 13.7889 10.408C14.0263 10.7613 14.1529 11.1766 14.1529 11.6012C14.1529 12.1706 13.9255 12.717 13.5202 13.12C13.1149 13.5231 12.5649 13.7498 11.9911 13.7498C11.5632 13.7498 11.145 13.6236 10.7895 13.3874C10.4339 13.1511 10.157 12.8155 9.99358 12.423C9.83013 12.0306 9.78738 11.5988 9.87069 11.1823C9.954 10.7658 10.1597 10.383 10.4619 10.0824C10.7642 9.78181 11.1494 9.57695 11.569 9.49394ZM8.95436 16.6086C9.79274 15.8632 10.8781 15.451 12.0031 15.451C13.1281 15.451 14.2135 15.8632 15.0519 16.6086C15.8186 17.2902 16.3295 18.2067 16.5072 19.208C15.2008 20.0267 13.656 20.5 12 20.5C10.3463 20.5 8.80362 20.028 7.49839 19.2115C7.67551 18.2088 8.18676 17.291 8.95436 16.6086Z" fill="#C9C4C0" />
  </svg>

  const rightArrow = <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.80899 0.361635L0.378828 6.07213C0.258791 6.19588 0.163514 6.3431 0.0984949 6.50531C0.0334755 6.66752 0 6.8415 0 7.01722C0 7.19295 0.0334755 7.36693 0.0984949 7.52914C0.163514 7.69135 0.258791 7.83857 0.378828 7.96232L5.80899 13.6063C5.92805 13.731 6.06969 13.83 6.22576 13.8976C6.38182 13.9652 6.54922 14 6.71829 14C6.88735 14 7.05475 13.9652 7.21081 13.8976C7.36688 13.83 7.50852 13.731 7.62758 13.6063C7.86611 13.3569 8 13.0195 8 12.6678C8 12.3162 7.86611 11.9788 7.62758 11.7294L3.09391 7.01722L7.62758 2.30507C7.86418 2.05713 7.99757 1.72249 7.99899 1.37329C7.99996 1.1981 7.96765 1.02444 7.90392 0.862259C7.84019 0.700079 7.74628 0.552569 7.62758 0.42819C7.51281 0.298972 7.37454 0.194674 7.22076 0.12132C7.06698 0.047966 6.90073 0.00701237 6.73164 0.000823975C6.56254 -0.00536537 6.39394 0.0233355 6.23558 0.0852652C6.07721 0.147195 5.93222 0.241127 5.80899 0.361635Z" fill="#FF7506" />
  </svg>


  return (
    <>
      <div className="main-form forgot-password-form">
        <div className="content-form">
          <h3 className="main-title">{useTranslate("forgot.password.title")}</h3>
          <Form
            name="forgotPassword"
            layout="vertical"
            onFinish={onSubmitEmail}
            onFinishFailed={onFinishFailed}
            requiredMark={false}
          >
            <Form.Item
              label={useTranslate("forgot.password.userName")}
              name="accountUserName"
              rules={[
                {
                  required: true,
                  message: `${useTranslate(
                    "login.page.form.required"
                  )} ${useTranslate("forgot.password.userName")}`,
                },
              ]}
            >
              <Input prefix={userIcon} onChange={handleChangeUserName} />
            </Form.Item>

            <Form.Item
              label={useTranslate("forgot.password.confirm")}
              name="accountPassword"
              rules={[
                {
                  required: true,
                  message: `${useTranslate(
                    "login.page.form.required"
                  )} ${useTranslate("forgot.password.confirm")}`,
                },
              ]}
            >
              <Input onChange={handleChangePassword} />
            </Form.Item>
            <div className="text-right">
              <NavLink to="/login" className="forgotPassword">{rightArrow} {useTranslate("forgot.password.return.login")}</NavLink>
            </div>
            <Form.Item>
              <div className="button-center__box">
                <button type="submit" className={userInfo.style} onClick={() => console.log(userInfo)}>
                  {useTranslate("forgot.password.button.accept")}
                </button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;

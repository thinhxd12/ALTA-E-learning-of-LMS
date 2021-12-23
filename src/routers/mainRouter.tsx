import React from "react";
import { ReactNode } from "react";

import { routerPageError } from "@view/PageError/router";
import { routerLogin, routerMainPublicPage } from "@view/Login/routerLogin";
import { AppstoreOutlined } from "@ant-design/icons";
import { IRouter } from "./interface";
import {routerHome} from '@view/Home/router'
import { routerMainTeacherPage, routerTeacher } from "@view/Teacher/routerTeacher";

export const privatePage: IRouter[] = [
  routerMainTeacherPage,
  routerTeacher,
  routerPageError,
];

export const publicPage: IRouter[] = [
  routerMainPublicPage,
  routerLogin,
  {
    path: "/login",
    loader: import("@view/Login"),
    exact: true,
  },
  {
    path: "/forgotpass",
    loader: import("@view/login/ForgotPass"),
    exact: true,
  },
  {
    path: "/resetPass/:otp",
    loader: import("@view/login/ResetPass"),
    exact: true,
  },
  routerPageError,
];




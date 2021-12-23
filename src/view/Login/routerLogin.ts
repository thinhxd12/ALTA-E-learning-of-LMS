import { IRouter } from "@routers/interface";

export const routerMainPublicPage = {
  path: "/",
  loader: import("@view/Login"),
  exact: true,
};

export const routerLogin: IRouter = {
  path: "/login",
  loader: import("./index"),
  exact: true,
  routes: [
    {
      path: "/forgotpass",
      loader: import("./ForgotPass"),
      exact: true,
    },
    {
      path: "/resetpass",
      loader: import("./ResetPass"),
      exact: true,
    },
    {
      path: "/updatepass",
      loader: import("./UpdatePass"),
      exact: true,
    },
    {
      path: "/loginotp",
      loader: import("./LoginByOTP"),
      exact: true,
    },
  ],
};

import { IRouter } from "@routers/interface";

export const routerMainTeacherPage = {
  path: "/",
  loader: import("./index"),
  exact: true,
};

export const routerTeacher: IRouter = {
  path: "/teacher",
  loader: import("./index"),
  exact: true,
  masterLayout:true,
  routes: [
    {
      path: "/forgotpass",
      loader: import("./DashboardLayout"),
      exact: true,
    },

  ],
};


import { IRouter } from "@routers/interface";

export const routerMainTeacherPage = {
  path: "/",
  loader: import("./Overview"),
  exact: true,
};

export const routerTeacher: IRouter = {
  path: "/",
  exact: true,
  masterLayout:true,
  routes: [
    {
      path: "/overview",
      loader: import("./Overview"),
      exact: true,
    },

  ],
};


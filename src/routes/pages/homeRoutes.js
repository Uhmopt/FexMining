import Welcome from "pages/welcome";

const routes = [
  // Welcome
  {
    path: `/welcome`,
    exact: true,
    auth: true,
    component: Welcome,
  },
];

export default routes;

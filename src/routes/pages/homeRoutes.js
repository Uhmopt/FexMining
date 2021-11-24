import About from "pages/about";
import Welcome from "pages/welcome";

const routes = [
  // Welcome
  {
    path: `/welcome`,
    exact: true,
    auth: false,
    component: Welcome,
  },
  // About
  {
    path: `/about`,
    exact: true,
    auth: false,
    component: About,
  },
];

export default routes;

import About from "pages/about";
import Packages from "pages/packages";
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
  // Packages
  {
    path: `/packages`,
    exact: true,
    auth: false,
    component: Packages,
  },
];

export default routes;

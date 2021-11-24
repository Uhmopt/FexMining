import About from "pages/about";
import Contact from "pages/contact";
import Packages from "pages/packages";
import TimeLine from "pages/timeline";
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
  // TimeLine
  {
    path: `/timeline`,
    exact: true,
    auth: false,
    component: TimeLine,
  },
  // Contact
  {
    path: `/contact`,
    exact: true,
    auth: false,
    component: Contact,
  },
];

export default routes;

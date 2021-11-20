import Welcome from "pages/welcome";
import homeRoutes from "routes/pages/homeRoutes";

const routes = [
  // page for guest
  {
    path: `/`,
    exact: true,
    auth: false,
    component: Welcome,
  },
  // Home routes
  ...homeRoutes,
];

export default routes;

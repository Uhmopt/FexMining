import { Grid } from "@mui/material";
import MenuLink from "components/buttons/MenuLink";
import { menuData } from "lib/menuData";
import React from "react";
import { useLocation } from "react-router";
import MainHeaderMenuSearch from "./MainHeaderMenuSearch";

export default function MainHeaderMenu() {
  const location = useLocation();
  return (
    <div>
      <Grid container spacing={2}>
        {menuData.map((menu, menuIndex) => (
          <Grid item key={menuIndex}>
            <MenuLink
              to={menu?.to ?? ""}
              active={location.pathname === menu?.to}
            >
              {menu?.title}
            </MenuLink>
          </Grid>
        ))}
        <Grid item>
          <MainHeaderMenuSearch />
        </Grid>
      </Grid>
    </div>
  );
}

import { Search } from "@mui/icons-material";
import { Fade, Paper, TextField } from "@mui/material";
import MenuLink from "components/buttons/MenuLink";
import React, { useState } from "react";

export default function MainHeaderMenuSearch() {
  const [open, setOpen] = useState(0);

  const handlePopoverOpen = () => {
    setOpen(2);
  };
  const handlePopoverClose = () => {
    setTimeout(() => {
      setOpen(1);
    }, 1000);
  };

  const handleEnd = () => {
    setOpen(0);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <MenuLink active>
        <Search />
      </MenuLink>
      {open > 0 && (
        <Fade in={open > 1} onExited={handleEnd}>
          <div className="absolute w-40">
            <Paper className="border-t-2 border-primary p-4 mt-6">
              <TextField
                name="serach"
                variant="outlined"
                placeholder="SEARCH ..."
              />
            </Paper>
          </div>
        </Fade>
      )}
    </div>
  );
}

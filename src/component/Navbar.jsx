import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import { padding } from "@mui/system";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/project" },
    { title: "Contact", path: "/contact" },
  ];

  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: "1.1rem",
  };

  const hoverStyle = {
    fontWeight: "bold",
    transition: "color 0.3s, font-weight 0.3s",
    fontSize: "1rem",
    padding: "10px",
    textDecoration: "underline",
    // "&:hover": "font-size: 1.2rem",
  };

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        backgroundColor: isMobile ? "black" : " rgb(23 30 47)",
      }}
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "2rem",
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              textShadow: "2px 2px 4px rgba(214, 83, 54, 0.3)",
              "&:hover": hoverStyle,
              // "&:active": "font-size: 1.8rem",
            }}
          >
            {/* <span
              style={{
                color: "rgb(255, 255, 255)",
                fontWeight: "bold",
                "&:hover": hoverStyle,
              }}
            >
            </span> */}
            GANESH KALE
          </NavLink>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
              PaperProps={{
                sx: {
                  width: "250px",
                  backgroundColor: "black",
                  fontWeight: "bold",
                  padding: "10px",
                  color: "black",
                  "&:hover": hoverStyle,
                },
              }}
            >
              <List>
                {navLinks.map((link) => (
                  <ListItem
                    button
                    key={link.title}
                    component={NavLink}
                    to={link.path}
                    onClick={handleDrawerClose}
                    sx={{
                      "&:hover": hoverStyle,
                      backgroundColor:
                        location.pathname === link.path
                          ? "rgba(255, 255, 255, 0.1)"
                          : "transparent",
                      color: "white",
                      fontWeight: "bold",
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                      textShadow: "2px 2px 4px rgba(214, 83, 54, 0.3)",
                    }}
                  >
                    <ListItemText primary={link.title} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                   fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              textShadow: "2px 2px 4px rgba(214, 83, 54, 0.3)",
                  ...(isActive && activeStyle),
                })}
              >
                <Button
                  color="inherit"
                  sx={{
                    "&:hover": hoverStyle,
                  }}
                >
                  {link.title}
                </Button>
              </NavLink>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

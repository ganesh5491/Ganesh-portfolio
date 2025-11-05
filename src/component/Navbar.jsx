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
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Clean minimal styled components
const CleanAppBar = styled(AppBar)`
  background: #ffffff !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  border-bottom: 1px solid #e9ecef !important;
  color: #212529 !important;
`;

const LogoText = styled(Typography)`
  color: #212529 !important;
  font-weight: 700 !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 1.25rem !important;
  transition: all 0.3s ease !important;

  &:hover {
    color: #007bff !important;
  }
`;

const NavButton = styled(Button)`
  color: #212529 !important;
  font-weight: 500 !important;
  padding: 8px 16px !important;
  border-radius: 8px !important;
  text-transform: none !important;
  font-family: 'Inter', sans-serif !important;
  transition: all 0.3s ease !important;
  position: relative !important;

  &:hover {
    background-color: #f8f9fa !important;
    color: #007bff !important;
  }

  &.active {
    background-color: #007bff !important;
    color: #ffffff !important;
  }
`;

const MobileMenuButton = styled(IconButton)`
  color: #212529 !important;
  background-color: #f8f9fa !important;
  border: 1px solid #dee2e6 !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: #e9ecef !important;
    border-color: #007bff !important;
  }
`;

const CleanDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background: #ffffff !important;
    border-left: 1px solid #e9ecef !important;
    width: 280px !important;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1) !important;
  }
`;

const MobileMenuItem = styled(ListItem)`
  border-radius: 8px !important;
  margin: 4px 16px !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: #f8f9fa !important;
  }

  &.active {
    background-color: #007bff !important;

    .MuiListItemText-primary {
      color: #ffffff !important;
    }
  }
`;

const MobileMenuText = styled(ListItemText)`
  .MuiListItemText-primary {
    color: #212529 !important;
    font-weight: 500 !important;
    font-family: 'Inter', sans-serif !important;
  }
`;

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

  return (
    <GlassAppBar position="fixed">
      <Toolbar sx={{ position: 'relative', zIndex: 1 }}>
        <LogoText variant="h5" sx={{ flexGrow: 1 }}>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            GANESH KALE
          </NavLink>
        </LogoText>
        
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  background: 'rgba(0, 255, 255, 0.2)',
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <GlassDrawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <List sx={{ paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
                {navLinks.map((link) => (
                  <MobileMenuItem
                    button
                    key={link.title}
                    component={NavLink}
                    to={link.path}
                    onClick={handleDrawerClose}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    <MobileMenuText primary={link.title} />
                  </MobileMenuItem>
                ))}
              </List>
            </GlassDrawer>
          </>
        ) : (
          <>
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                <GlowButton
                  className={location.pathname === link.path ? 'active' : ''}
                  sx={{ mx: 0.5 }}
                >
                  {link.title}
                </GlowButton>
              </NavLink>
            ))}
          </>
        )}
      </Toolbar>
    </GlassAppBar>
  );
};

export default Navbar;
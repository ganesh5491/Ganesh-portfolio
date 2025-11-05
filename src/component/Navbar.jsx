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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/About" },
    { title: "Experience", path: "/experience" },
    { title: "Projects", path: "/Project" },
    { title: "AI Expertise", path: "/ai-expertise" },
    { title: "Skills", path: "/Skills" },
    { title: "Contact", path: "/Contact" },
  ];

  return (
    <CleanAppBar position="fixed" component={motion.div} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <LogoText variant="h6">
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Ganesh Kale
            </NavLink>
          </LogoText>
        </Box>

        {isMobile ? (
          <>
            <MobileMenuButton
              edge="start"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </MobileMenuButton>
            <CleanDrawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <Box sx={{ paddingTop: '2rem' }}>
                {navLinks.map((link) => (
                  <MobileMenuItem
                    button
                    key={link.title}
                    component={NavLink}
                    to={link.path}
                    onClick={handleDrawerClose}
                    className={location.pathname.toLowerCase() === link.path.toLowerCase() ? 'active' : ''}
                  >
                    <MobileMenuText primary={link.title} />
                  </MobileMenuItem>
                ))}
              </Box>
            </CleanDrawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                <NavButton
                  className={location.pathname.toLowerCase() === link.path.toLowerCase() ? 'active' : ''}
                  variant={location.pathname.toLowerCase() === link.path.toLowerCase() ? "contained" : "text"}
                >
                  {link.title}
                </NavButton>
              </NavLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </CleanAppBar>
  );
};

export default Navbar;
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
import styled, { keyframes } from "styled-components";

// Futuristic animations
const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
  50% { 
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.4);
    text-shadow: 0 0 15px rgba(255, 0, 255, 0.6);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
`;

// Styled components
const GlassAppBar = styled(AppBar)`
  background: rgba(10, 10, 10, 0.8) !important;
  backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      rgba(0, 255, 255, 0.1) 0%, 
      rgba(255, 0, 255, 0.1) 50%, 
      rgba(0, 255, 255, 0.1) 100%);
    pointer-events: none;
    animation: ${shimmer} 3s ease-in-out infinite;
  }
`;

const LogoText = styled(Typography)`
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff7f) !important;
  background-size: 200% 200% !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
  animation: ${shimmer} 3s ease-in-out infinite !important;
  font-weight: 800 !important;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.5) !important;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease !important;
  
  &:hover {
    transform: scale(1.05);
    animation-duration: 1s;
  }
`;

const GlowButton = styled(Button)`
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 600 !important;
  padding: 8px 16px !important;
  border-radius: 20px !important;
  position: relative !important;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  animation: ${float} 3s ease-in-out infinite !important;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05) !important;
    box-shadow: 0 10px 25px rgba(0, 255, 255, 0.3) !important;
    border-color: rgba(0, 255, 255, 0.4) !important;
    animation-play-state: paused !important;
    
    &::before {
      opacity: 1;
    }
  }
  
  &.active {
    background: linear-gradient(45deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 255, 0.3)) !important;
    border-color: rgba(0, 255, 255, 0.6) !important;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4) !important;
    animation: ${glow} 2s ease-in-out infinite !important;
  }
`;

const GlassDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background: rgba(10, 10, 10, 0.95) !important;
    backdrop-filter: blur(20px) !important;
    border-left: 1px solid rgba(255, 255, 255, 0.1) !important;
    width: 280px !important;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, 
        rgba(0, 255, 255, 0.05) 0%, 
        rgba(255, 0, 255, 0.05) 50%, 
        rgba(0, 255, 255, 0.05) 100%);
      pointer-events: none;
    }
  }
`;

const MobileMenuItem = styled(ListItem)`
  border-radius: 12px !important;
  margin: 8px 16px !important;
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  position: relative !important;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateX(10px) scale(1.02) !important;
    box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3) !important;
    border-color: rgba(0, 255, 255, 0.4) !important;
    
    &::before {
      opacity: 1;
    }
  }
  
  &.active {
    background: linear-gradient(45deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 255, 0.3)) !important;
    border-color: rgba(0, 255, 255, 0.6) !important;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4) !important;
  }
`;

const MobileMenuText = styled(ListItemText)`
  .MuiListItemText-primary {
    color: rgba(255, 255, 255, 0.9) !important;
    font-weight: 600 !important;
    background: linear-gradient(90deg, #ffffff, #00ffff, #ffffff) !important;
    background-size: 200% 200% !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    color: transparent !important;
    transition: all 0.3s ease !important;
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
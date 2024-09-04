import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.jpg";
import { SmartToy } from "@mui/icons-material";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MonochromePhotosTwoToneIcon from '@mui/icons-material/MonochromePhotosTwoTone';
import PsychologyIcon from "@mui/icons-material/Psychology";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import FaceRetouchingNaturalRoundedIcon from '@mui/icons-material/FaceRetouchingNaturalRounded';
import CircleNotificationsSharpIcon from '@mui/icons-material/CircleNotificationsSharp';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Image generation",
      icon: <MonochromePhotosTwoToneIcon />,
      path: "/home",
    },
    {
      text: "AI try out",
      icon: <PsychologyIcon />,
      path: "/about",
    },
    {
      text: "Image editing",
      icon: <FaceRetouchingNaturalRoundedIcon />,
      path: "/work",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/testimonial",
    },
    {
      text: "Subscribe Now",
      icon: <CircleNotificationsSharpIcon />,
      path: "/SubscribeNow",
    },
    {
      text: "Sign In",
      icon: <LoginRoundedIcon />,
      path: "/Signin",
    },
    {
      text: "Admin",
      icon: <SupervisorAccountIcon />,
      path: "/admin",
    }
  ];

  return (
    <nav className="navbar-container">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="nav-logo" />
      </div>
      <div className="navbar-links-container">
        <Link to="/home" className="navbar-link">Image generation</Link>
        <Link to="/about" className="navbar-link">AI try out</Link>
        <Link to="/work" className="navbar-link11">Image editing</Link>
        <Link to="/testimonial" className="navbar-link11">Contact</Link>
        <Link to="/SubscribeNow" className="navbar-link11">Subscribe Now</Link>
        <Link to="/Signin" className="navbar-link11">Sign In</Link>
        <Link to="/admin" className="navbar-link11">Admin</Link>
        <Link to="" className="navbar-link">
          <SmartToy className="navbar-ai-icon" />
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

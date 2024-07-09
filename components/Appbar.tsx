'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchInput from './SearchInput';
import { useActiveLink } from '@/app/context/ActiveLinkContext';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <AccountCircle fontSize="small" />
                </ListItemIcon>
                Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );
    const { activeLink } = useActiveLink();
    return (
        <Box sx={{ flexGrow: 1, marginTop: '20px', marginRight: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <AppBar position="fixed" sx={{ 
                top:0,
                zIndex:999,
                width: '79vw',height:'12vh',
                background: 'rgba(0, 0, 0, 0)',
                borderRadius: '16px',
                boxShadow: 'none',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                marginBottom:'50px'
            }}>
                <Toolbar disableGutters>
                    <Typography
                        variant="body1"
                        sx={{
                            mx: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    />
                      <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Pages
  </Link>

  <Typography color="text.primary">{activeLink=="/"?'Home':activeLink.replace('/','')}</Typography>
</Breadcrumbs>
<Typography variant="body1" sx={{textTransform: "capitalize"}}>{activeLink=="/"?'Home':activeLink.replace('/','')}

</Typography>



                        

              
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '50px',
                            padding: '0px 5px',
                            marginTop:'10px',
                            marginRight:'50px',
                            height:'60px',
                            width:340,
                            marginLeft:50,
                            backgroundColor: '#FFFFFF'
                        }}
                    >
                        <SearchInput/>
                        <IconButton size="small" aria-label="mails" color="inherit">
                            <NotificationsNoneIcon htmlColor='gray' fontSize="small" />
                        </IconButton>
                        <IconButton size="small" aria-label="notifications" color="inherit">
                            <ErrorOutlineOutlinedIcon htmlColor='gray' fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                        <ColorLensIcon htmlColor='gray' fontSize="small" />

                        </IconButton>
                        <IconButton
                            size="small"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
  }
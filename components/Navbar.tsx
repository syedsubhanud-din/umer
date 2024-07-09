'use client';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { linklist } from '../data/navlinks';
import { Typography } from '@mui/material';
import { useActiveLink } from '@/app/context/ActiveLinkContext';

const Navbar = () => {
  const { activeLink, setActiveLink } = useActiveLink();

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const DrawerList = (
    <Box
      sx={{
        display: {
          xs: 'none', 
          md: 'block', 
        },
        width: 300,
        position: 'fixed',
        backgroundColor: '#f5f5f5',
        height: '100vh',
        padding: '20px',
        top: 0,
        left: 0,
      }}
    >
      <Typography variant='h5' component='div' sx={{ padding: '20px', mb: 2, fontWeight: '100' }}>
        HORIZON <span style={{ fontWeight: '50 ' }}>FREE</span>
      </Typography>
      <List>
        {linklist.map((link) => (
          <ListItem key={link.to} disablePadding>
            <Link href={link.to} passHref>
              <ListItemButton
                sx={{ width: '260px' }}
                className={activeLink === link.to ? 'active-link' : ''}
                id={'NavButtons'}
                onClick={() => handleLinkClick(link.to)}
              >
                <ListItemIcon id={activeLink === link.to ? 'active-link' : ''}>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return <div>{DrawerList}</div>;
};

export default Navbar;

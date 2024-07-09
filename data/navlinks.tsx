// import DashboardIcon from '@mui/icons-material/Dashboard';
// import StorefrontIcon from '@mui/icons-material/Storefront';
import BarChartIcon from '@mui/icons-material/BarChart';
// import TableChartIcon from '@mui/icons-material/TableChart';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export type Linkies = {
    to: string;
    name: string;
    icon: any;
  };
  
  export const linklist: Linkies[] = [
    { to: '/', name: 'Main Dashboard',icon:<HomeIcon />  },
       { to: '/marketplace', name: 'NFT Marketplace', icon: <ShoppingCartIcon/> },
       { to: '/data-tables', name: 'Data Tables', icon: <BarChartIcon /> }, 
       { to: '/profile', name: 'Profile', icon: <PersonIcon /> },
       { to: '/sign-in', name: 'Sign In', icon: <LockIcon /> },
       { to: '/rtl-admin', name: 'RTL Admin', icon: <HomeIcon /> }
  ];

  
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HMobiledataIcon from '@mui/icons-material/HMobiledata';
import { Link } from '@mui/material';

export default function TopBar() {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" elevation="0" sx={{ bgcolor: 'orange' }}>
        <Toolbar variant="dense" elevation="0">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="H"
            sx={{ mr: 2 }}
            href="/stories"
          >
            <HMobiledataIcon />
          </IconButton>
          <Typography sx={{ border: 2, p: '0.1rem 0.3rem 0.1rem 0.3rem' }} variant="h6" component="div">
            Hacker News
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link sx={{ textDecoration: 'none', color: 'inherit' }} href="/stories">H News</Link>
          </Typography>
          <Link href="/search" color="inherit" sx={{ textDecoration: 'none' }}>Search</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

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
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HMobiledataIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            H News
          </Typography>
          <Link href="/search" color="inherit" sx={{ textDecoration: 'none' }}>Search</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

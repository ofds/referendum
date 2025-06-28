// src/App.tsx
import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material'; // Import AppBar, Toolbar, IconButton
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings'; // Import SettingsIcon
import { LeftPanel } from './components/LeftPanel';
import { CentralStage } from './components/CentralStage';
import { RightPanel } from './components/RightPanel';

// Create a dark theme to match your concept
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // A lighter blue for primary elements in dark mode
    },
    secondary: {
      main: '#ce93d8', // A light purple for secondary elements
    },
    success: {
      main: '#81c784', // Green for success
    },
    error: {
      main: '#e57373', // Red for errors
    },
    background: {
      default: '#121212', // Darker background
      paper: '#1e1e1e', // Slightly lighter for paper components
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'unset', // Remove the default background image from Paper
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase text
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* Top Navigation Bar */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Referendum App
          </Typography>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{
        padding: 2,
        display: 'flex', // Make this Box a flex container
        gap: 2,          // Add gap between flex items for spacing (equivalent to spacing={2})
        flexWrap: 'wrap', // Allow items to wrap to the next line on smaller screens
        minHeight: 'calc(100vh - 64px)', // Adjust minHeight to account for AppBar height
        alignItems: 'flex-start', // Align items to the top
      }}>
        {/* Left Panel */}
        <Box sx={{
          flex: { xs: '1 1 100%', md: '0 0 calc(25% - 8px)' }, // Adjusted flex-basis for gap
          maxWidth: { xs: '100%', md: 'calc(25% - 8px)' },     // Adjusted max-width for gap
          minWidth: 0, // Allow shrinking
          boxSizing: 'border-box', // Ensure padding/border is included in width
        }}>
          <LeftPanel />
        </Box>

        {/* Central Stage */}
        <Box sx={{
          flex: { xs: '1 1 100%', md: '0 0 calc(50% - 16px)' }, // Adjusted flex-basis for gap
          maxWidth: { xs: '100%', md: 'calc(50% - 16px)' },     // Adjusted max-width for gap
          minWidth: 0, // Allow shrinking
          boxSizing: 'border-box',
        }}>
          <CentralStage />
        </Box>

        {/* Right Panel */}
        <Box sx={{
          flex: { xs: '1 1 100%', md: '0 0 calc(25% - 8px)' }, // Adjusted flex-basis for gap
          maxWidth: { xs: '100%', md: 'calc(25% - 8px)' },     // Adjusted max-width for gap
          minWidth: 0, // Allow shrinking
          boxSizing: 'border-box',
        }}>
          <RightPanel />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
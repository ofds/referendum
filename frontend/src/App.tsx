// src/App.tsx
import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
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
      '@media (max-width:600px)': { // Responsive font size
        fontSize: '2rem',
      },
    },
    h6: {
      fontWeight: 500,
      '@media (max-width:600px)': { // Responsive font size
        fontSize: '1rem',
      },
    },
    body2: { // Added responsive font size for body2
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'unset', // Remove the default background image from Paper
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)', // Refined box shadow
          borderRadius: '12px', // Ensuring consistent border radius
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase text
          transition: 'all 0.3s ease-in-out', // Added transition for hover effects
          '&:hover': {
            transform: 'translateY(-2px)', // Subtle lift effect
            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.4)', // Enhanced shadow on hover
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease-in-out', // Transition for tab hover
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)', // Subtle hover background
          },
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
      <AppBar
        position="static"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          background: 'linear-gradient(to right, #1a1a1a, #242424)', // Subtle gradient
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow to app bar
        }}
      >
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
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        minHeight: 'calc(100vh - 64px)',
        alignItems: 'flex-start',
        background: 'repeating-linear-gradient(-45deg, #1a1a1a 0px, #1a1a1a 2px, transparent 2px, transparent 4px)', // Subtle background pattern
        backgroundColor: '#121212', // Fallback background color
      }}>
        {/* Left Panel */}
        <Box sx={{
          flex: { xs: '1 1 100%', md: '0 0 calc(25% - 8px)' },
          maxWidth: { xs: '100%', md: 'calc(25% - 8px)' },
          minWidth: 0,
          boxSizing: 'border-box',
        }}>
          <LeftPanel />
        </Box>

        {/* Central Stage */}
        <Box sx={{
          flex: { xs: '1 1 100%', md: '0 0 calc(50% - 16px)' },
          maxWidth: { xs: '100%', md: 'calc(50% - 16px)' },
          minWidth: 0,
          boxSizing: 'border-box',
        }}>
          <CentralStage />
        </Box>

        {/* Right Panel */}
        <Box sx={{
          flex: { xs: '1 1 100%', md: '0 0 calc(25% - 8px)' },
          maxWidth: { xs: '100%', md: 'calc(25% - 8px)' },
          minWidth: 0,
          boxSizing: 'border-box',
        }}>
          <RightPanel />
        </Box>
      </Box>
      {/* Global Scrollbar Styling */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #2e2e2e;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #777;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default App;
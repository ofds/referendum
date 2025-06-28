// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import { LeftPanel } from './components/LeftPanel';
import { CentralStage } from './components/CentralStage';
import { RightPanel } from './components/RightPanel';

// Create a dark theme to match your concept
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ce93d8',
    },
    success: {
      main: '#81c784',
    },
    error: {
      main: '#e57373',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
      marginBottom: '1rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h6: {
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'unset',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
        },
      },
    },
  },
});

// --- Mock Data is now lifted up to the App component ---
const featuredReferendum = {
  title: "Should the city invest in a new public transportation system?",
  description: "This referendum proposes a significant investment in upgrading and expanding the city's public transportation network, including new bus routes, light rail extensions, and improved accessibility features. The goal is to reduce traffic congestion and carbon emissions.",
  votes: {
    yes: 748523,
    no: 412987,
  },
  timeRemaining: "15 Days, 8 Hours",
  totalComments: 4281
};
// ------------------------------------


function App() {
  const [isFocusMode, setFocusMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger focus mode when user scrolls down a bit
      if (window.scrollY > 50) {
        setFocusMode(true);
      } else {
        setFocusMode(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const totalVotes = featuredReferendum.votes.yes + featuredReferendum.votes.no;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar
        position="sticky" // Sticky position keeps it at the top during scroll
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          background: 'linear-gradient(to right, #1a1a1a, #242424)',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          {/* Conditionally render AppBar content based on focus mode */}
          {!isFocusMode ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                Referendum App
              </Typography>
              <IconButton color="inherit">
                <SettingsIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', transition: 'opacity 0.3s ease-in-out' }}>
              <HowToVoteIcon sx={{ mr: 2 }} />
              <Typography variant="h6" sx={{ flexGrow: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {featuredReferendum.title}
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, whiteSpace: 'nowrap' }}>
                {totalVotes.toLocaleString()} Votes
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      <Box sx={{
        padding: 2,
        display: 'flex',
        gap: 2,
        flexWrap: 'nowrap', // Prevent wrapping to allow flex transitions
        height: 'calc(100vh - 64px)', // Adjust height for the AppBar
        alignItems: 'stretch', // Make all panels equal height
        background: 'repeating-linear-gradient(-45deg, #1a1a1a 0px, #1a1a1a 2px, transparent 2px, transparent 4px)',
        backgroundColor: '#121212',
        transition: 'all 0.5s ease-in-out',
      }}>
        {/* Left Panel */}
        <Box sx={{
          flex: isFocusMode ? '0 0 0' : '0 0 calc(25% - 8px)',
          opacity: isFocusMode ? 0 : 1,
          transition: 'all 0.5s ease-in-out',
          minWidth: 0,
          overflow: 'hidden', // Hide content as it shrinks
          boxSizing: 'border-box',
        }}>
          <LeftPanel />
        </Box>

        {/* Central Stage */}
        <Box sx={{
          flex: isFocusMode ? '0 0 0' : '0 0 calc(50% - 16px)',
          opacity: isFocusMode ? 0 : 1,
          transition: 'all 0.5s ease-in-out',
          minWidth: 0,
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}>
          {/* Pass referendum data down as a prop */}
          <CentralStage featuredReferendum={featuredReferendum} />
        </Box>

        {/* Right Panel (Discussion) */}
        <Box sx={{
          flex: isFocusMode ? '1 1 100%' : '0 0 calc(25% - 8px)',
          transition: 'all 0.5s ease-in-out',
          minWidth: 0,
          boxSizing: 'border-box',
          height: '100%',
        }}>
          <RightPanel />
        </Box>
      </Box>

      {/* Global styles for scrollbar and body overflow */}
      <style>{`
        body {
          /* Prevent the body from scrolling when the discussion is in focus */
          overflow-y: ${isFocusMode ? 'hidden' : 'auto'};
        }
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
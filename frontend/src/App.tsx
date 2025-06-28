// src/App.tsx
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LeftPanel } from './components/LeftPanel';
import { CentralStage } from './components/CentralStage';
import { RightPanel } from './components/RightPanel';

// Create a dark theme to match your concept
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{
        padding: 2,
        display: 'flex', // Make this Box a flex container
        gap: 2,          // Add gap between flex items for spacing (equivalent to spacing={2})
        flexWrap: 'wrap', // Allow items to wrap to the next line on smaller screens
        minHeight: '100vh', // Ensure the container takes full viewport height
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
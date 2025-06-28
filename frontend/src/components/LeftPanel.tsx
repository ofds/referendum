// src/components/LeftPanel.tsx
import React from 'react';
import { Paper, Typography, Box, Tabs, Tab } from '@mui/material';

// Define props for the TabPanel to hide/show content based on selected tab
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Reusable TabPanel component
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}> {/* Reduced padding for compact list */}
          {children}
        </Box>
      )}
    </div>
  );
}

// Helper function for accessibility props
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const LeftPanel = () => {
  const [value, setValue] = React.useState(0); // State to manage the active tab

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ padding: 1, height: '90vh', display: 'flex', flexDirection: 'column'  }}>
      <Typography variant="h6" sx={{ mb: 1 }}>Referendum Pipeline</Typography>

      {/* Tabs Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="referendum pipeline tabs" variant="scrollable" scrollButtons="auto">
          <Tab label="Scheduled" {...a11yProps(0)} />
          <Tab label="Lottery Candidates" {...a11yProps(1)} />
          <Tab label="Proposals (<10 Votes)" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}> {/* Makes content scrollable if it overflows */}
        <CustomTabPanel value={value} index={0}>
          <Typography variant="body2" sx={{ mb: 1 }}>List of Scheduled Referendums will go here.</Typography>
          {/* Example placeholder cards - remove later */}
          <Paper sx={{ p: 1, mb: 1 }}>Scheduled Item 1</Paper>
          <Paper sx={{ p: 1, mb: 1 }}>Scheduled Item 2</Paper>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Typography variant="body2" sx={{ mb: 1 }}>List of Lottery Candidates (=10 votes) will go here.</Typography>
          {/* Example placeholder cards - remove later */}
          <Paper sx={{ p: 1, mb: 1 }}>Candidate A (15 tickets)</Paper>
          <Paper sx={{ p: 1, mb: 1 }}>Candidate B (22 tickets)</Paper>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Typography variant="body2" sx={{ mb: 1 }}>List of Referendum Proposals (10 votes) will go here.</Typography>
          {/* Your "Propose a Political Topic" button will go here */}
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
            <Paper component="button" sx={{
                width: '100%',
                py: 1.5,
                border: 'none',
                backgroundColor: 'primary.main', // Example background color
                color: 'primary.contrastText',  // Example text color
                cursor: 'pointer',
                borderRadius: '4px',
                '&:hover': {
                    backgroundColor: 'primary.dark',
                }
            }}>
                Propose a Political Topic
            </Paper>
          </Box>
          {/* Example placeholder cards - remove later */}
          <Paper sx={{ p: 1, mb: 1 }}>Proposal X (5 votes)</Paper>
          <Paper sx={{ p: 1, mb: 1 }}>Proposal Y (2 votes)</Paper>
        </CustomTabPanel>
      </Box>
    </Paper>
  );
};
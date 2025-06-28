// src/components/LeftPanel.tsx
import React from 'react';
import { Paper, Typography, Box, Tabs, Tab, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'; // Imported List, ListItem, ListItemText, ListItemIcon
import EventNoteIcon from '@mui/icons-material/EventNote'; // Example icon for Scheduled
import StarsIcon from '@mui/icons-material/Stars'; // Example icon for Lottery Candidates
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // Example icon for Proposals


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
        <Box sx={{ p: 1 }}>
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
    <Paper sx={{ padding: 1, height: '90vh', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.12)' }}> {/* Added border for outline */}
      <Typography variant="h6" sx={{ mb: 1, px: 1 }}>Referendum Pipeline</Typography>

      {/* Tabs Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="referendum pipeline tabs" variant="fullWidth" >
          <Tab label="Scheduled" {...a11yProps(0)} />
          <Tab label="Lottery Candidates" {...a11yProps(1)} />
          <Tab label="Proposals (<10 Votes)" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', px: 1, pt: 1 }}>
        <CustomTabPanel value={value} index={0}>
          <Typography variant="body2" sx={{ mb: 1 }}>List of Scheduled Referendums will go here.</Typography>
          {/* Example placeholder list items */}
          <List dense>
            <Paper sx={{ mb: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <ListItem>
                <ListItemIcon>
                  <EventNoteIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Scheduled Item 1" secondary="Vote ends: 2025-07-15" />
              </ListItem>
            </Paper>
            <Paper sx={{ mb: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <ListItem>
                <ListItemIcon>
                  <EventNoteIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Scheduled Item 2" secondary="Vote ends: 2025-08-01" />
              </ListItem>
            </Paper>
          </List>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Typography variant="body2" sx={{ mb: 1 }}>List of Lottery Candidates (=10 votes) will go here.</Typography>
          {/* Example placeholder list items */}
          <List dense>
            <Paper sx={{ mb: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <ListItem>
                <ListItemIcon>
                  <StarsIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Candidate A" secondary="15 tickets (Avg. 7.5 votes)" />
              </ListItem>
            </Paper>
            <Paper sx={{ mb: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <ListItem>
                <ListItemIcon>
                  <StarsIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Candidate B" secondary="22 tickets (Avg. 11 votes)" />
              </ListItem>
            </Paper>
          </List>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Typography variant="body2" sx={{ mb: 1 }}>List of Referendum Proposals (10 votes) will go here.</Typography>
          {/* Your "Propose a Political Topic" button will go here */}
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
          <Paper component="button" sx={{
                width: '100%',
                py: 1.5,
                border: 'none',
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                cursor: 'pointer',
                borderRadius: '50px', // Changed to 50px for pill shape
                '&:hover': {
                    backgroundColor: 'primary.dark',
                    boxShadow: 6, // Subtle box shadow on hover
                }
            }}>
                Propose a Political Topic
            </Paper>
          </Box>
          {/* Example placeholder list items */}
          <List dense>
            <Paper sx={{ mb: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <ListItem>
                <ListItemIcon>
                  <LightbulbIcon color="error" />
                </ListItemIcon>
                <ListItemText primary="Proposal X" secondary="Votes: 5" />
              </ListItem>
            </Paper>
            <Paper sx={{ mb: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <ListItem>
                <ListItemIcon>
                  <LightbulbIcon color="error" />
                </ListItemIcon>
                <ListItemText primary="Proposal Y" secondary="Votes: 2" />
              </ListItem>
            </Paper>
          </List>
        </CustomTabPanel>
      </Box>
    </Paper>
  );
};
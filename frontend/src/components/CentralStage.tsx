// src/components/CentralStage.tsx
import React from 'react';
import { Paper, Typography, Box, LinearProgress, Grid, Button, Stack } from '@mui/material'; // Import Stack
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ForumIcon from '@mui/icons-material/Forum';

// --- Mock Data for Demonstration ---
const featuredReferendum = {
  title: "Should the city invest in a new public transportation system?",
  votes: {
    yes: 748523,
    no: 412987,
  },
  timeRemaining: "15 Days, 8 Hours",
  totalComments: 4281
};
// ------------------------------------

export const CentralStage = () => {
  // Calculate vote percentages from mock data
  const totalVotes = featuredReferendum.votes.yes + featuredReferendum.votes.no;
  const yesPercentage = (featuredReferendum.votes.yes / totalVotes) * 100;

  return (
    <Box>
      {/* Top section with referendum title */}
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {featuredReferendum.title}
      </Typography>

      {/* The Vote Progress Bar (Oval) */}
      <Paper sx={{ p: 2, mb: 3, borderRadius: '50px', border: 1, borderColor: 'divider' }}>
        {/* ADDED overflow: 'hidden' here */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflow: 'hidden' }}>
          <Typography variant="h6" color="success.main" sx={{ whiteSpace: 'nowrap' }}>Yes ({yesPercentage.toFixed(1)}%)</Typography>
          <LinearProgress
            variant="determinate"
            value={yesPercentage}
            sx={{ height: 20, borderRadius: 10, flexGrow: 1 }}
            color="success"
          />
          <Typography variant="h6" color="error.main" sx={{ whiteSpace: 'nowrap' }}>No ({(100 - yesPercentage).toFixed(1)}%)</Typography>
        </Box>
      </Paper>

      {/* Bottom rectangle for stats and actions */}
      <Paper sx={{ p: 3, height: 'auto' }}>
        {/* Statistics Section - now using Grid V2 pattern */}
        <Grid container spacing={3} columns={12} alignItems="center"> {/* columns=12 for the grid */}

          {/* Stat: Total Votes - now a Box inside Grid container */}
          <Box sx={{ width: { xs: '100%', sm: `${(4 / 12) * 100}%` } }}> {/* 4/12 = 33.33% for sm+ */}
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', height: '100%' }}> {/* height: '100%' for consistent height */}
              <HowToVoteIcon sx={{ fontSize: 40 }} color="primary" />
              <Typography variant="h6">{totalVotes.toLocaleString()}</Typography>
              <Typography variant="subtitle1" color="text.secondary">Total Votes Cast</Typography>
            </Paper>
          </Box>

          {/* Stat: Time Remaining - now a Box inside Grid container */}
          <Box sx={{ width: { xs: '100%', sm: `${(4 / 12) * 100}%` } }}> {/* 4/12 = 33.33% for sm+ */}
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', height: '100%' }}>
              <AccessTimeIcon sx={{ fontSize: 40 }} color="primary" />
              <Typography variant="h6">{featuredReferendum.timeRemaining}</Typography>
              <Typography variant="subtitle1" color="text.secondary">Time Remaining</Typography>
            </Paper>
          </Box>
          
          {/* Stat: Discussion Count - now a Box inside Grid container */}
          <Box sx={{ width: { xs: '100%', sm: `${(4 / 12) * 100}%` } }}> {/* 4/12 = 33.33% for sm+ */}
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', height: '100%' }}>
              <ForumIcon sx={{ fontSize: 40 }} color="primary" />
              <Typography variant="h6">{featuredReferendum.totalComments.toLocaleString()}</Typography>
              <Typography variant="subtitle1" color="text.secondary">Total Comments</Typography>
            </Paper>
          </Box>

          {/* Action Buttons - now using Stack for simpler horizontal layout */}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 3 }}> {/* mt: 3 for margin-top */}
            <Stack direction="row" spacing={2}> {/* Stack for buttons */}
              <Button variant="contained" color="success" size="large">Cast Your "Yes" Vote</Button>
              <Button variant="contained" color="error" size="large">Cast Your "No" Vote</Button>
            </Stack>
          </Box>

        </Grid>
      </Paper>
    </Box>
  );
};
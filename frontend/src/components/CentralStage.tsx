// src/components/CentralStage.tsx
import React from 'react';
import { Paper, Typography, Box, LinearProgress, Button, Stack, Card, CardContent } from '@mui/material';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ForumIcon from '@mui/icons-material/Forum';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

// Define the shape of the referendum data object
interface Referendum {
  title: string;
  description: string;
  votes: {
    yes: number;
    no: number;
  };
  timeRemaining: string;
  totalComments: number;
}

// Define the props for this component
interface CentralStageProps {
  featuredReferendum: Referendum;
}

export const CentralStage: React.FC<CentralStageProps> = ({ featuredReferendum }) => {
  // Calculate vote percentages from the passed-in props
  const totalVotes = featuredReferendum.votes.yes + featuredReferendum.votes.no;
  const yesPercentage = (featuredReferendum.votes.yes / totalVotes) * 100;
  const noPercentage = 100 - yesPercentage;

  return (
    <Box sx={{ height: '100%', overflowY: 'auto', p: 1 }}>
      {/* Top section with referendum title */}
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {featuredReferendum.title}
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 3 }}>
        {featuredReferendum.description}
      </Typography>

      {/* The Vote Progress Bar (Oval) */}
      <Paper sx={{ p: 2, mb: 3, borderRadius: '50px', border: 1, borderColor: 'divider', boxShadow: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflow: 'hidden' }}>
          <Typography variant="body1" color="success.main" sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Yes ({yesPercentage.toFixed(1)}%)</Typography>
          <LinearProgress
            variant="determinate"
            value={yesPercentage}
            sx={{ height: 20, borderRadius: 10, flexGrow: 1 }}
            color="success"
          />
          <Typography variant="body1" color="error.main" sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>No ({noPercentage.toFixed(1)}%)</Typography>
        </Box>
      </Paper>

      {/* Bottom rectangle for stats and actions - now a Card */}
      <Card sx={{ p: 1, height: 'auto', boxShadow: 3, borderRadius: '12px' }}>
        <CardContent>
          {/* Statistics Section - now using Stack for better control */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 3 }}
            justifyContent="space-around"
            alignItems="center"
            mb={3}
          >
            {/* Stat: Total Votes */}
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', flexGrow: 1, width: { xs: '100%', sm: 'auto' }, borderRadius: '12px', borderColor: 'rgba(255, 255, 255, 0.12)' }}>
              <HowToVoteIcon sx={{ fontSize: 40 }} color="primary" />
              <Typography variant="h6">{totalVotes.toLocaleString()}</Typography>
              <Typography variant="subtitle1" color="text.secondary">Total Votes Cast</Typography>
            </Paper>

            {/* Stat: Time Remaining */}
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', flexGrow: 1, width: { xs: '100%', sm: 'auto' }, borderRadius: '12px', borderColor: 'rgba(255, 255, 255, 0.12)' }}>
              <AccessTimeIcon sx={{ fontSize: 40 }} color="primary" />
              <Typography variant="h6">{featuredReferendum.timeRemaining}</Typography>
              <Typography variant="subtitle1" color="text.secondary">Time Remaining</Typography>
            </Paper>
            
            {/* Stat: Discussion Count */}
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', flexGrow: 1, width: { xs: '100%', sm: 'auto' }, borderRadius: '12px', borderColor: 'rgba(255, 255, 255, 0.12)' }}>
              <ForumIcon sx={{ fontSize: 40 }} color="primary" />
              <Typography variant="h6">{featuredReferendum.totalComments.toLocaleString()}</Typography>
              <Typography variant="subtitle1" color="text.secondary">Total Comments</Typography>
            </Paper>
          </Stack>

          {/* Action Buttons - using Stack for simpler horizontal layout */}
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Button variant="contained" color="success" size="large" startIcon={<ThumbUpIcon />} sx={{ borderRadius: '50px', px: 3, py: 1.5 }}>Cast Your "Yes" Vote</Button>
            <Button variant="contained" color="error" size="large" startIcon={<ThumbDownIcon />} sx={{ borderRadius: '50px', px: 3, py: 1.5 }}>Cast Your "No" Vote</Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
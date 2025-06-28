import React from 'react';
import { Paper, Typography } from '@mui/material';

export const RightPanel = () => {
  return (
    <Paper sx={{ padding: 2, height: '90vh', boxShadow: 3, borderRadius: '12px' }}> {/* Added boxShadow and borderRadius */}
      <Typography variant="h6">Discussion Forum</Typography>
    </Paper>
  );
};
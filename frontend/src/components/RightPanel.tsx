import React from 'react';
import { Paper, Typography, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'; // Imported List, ListItem, ListItemText, ListItemIcon
import CommentIcon from '@mui/icons-material/Comment'; // Imported CommentIcon
import FavoriteIcon from '@mui/icons-material/Favorite'; // Example icon for popular opinion

export const RightPanel = () => {
  return (
    <Paper sx={{ padding: 2, height: '100%', boxShadow: 3, borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.12)' }}> {/* Added border for outline */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}> {/* Makes content scrollable */}
        <List>
          {/* Placeholder Discussion Item 1 */}
          <Paper sx={{ mb: 1.5, p: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <ListItem alignItems="flex-start">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <CommentIcon color="action" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    John Doe
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'block' }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      "I believe this is a crucial step towards a greener city."
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      2 hours ago
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Paper>

          {/* Placeholder Discussion Item 2 (Popular Opinion) */}
          <Paper sx={{ mb: 1.5, p: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <ListItem alignItems="flex-start">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <FavoriteIcon color="error" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    Popular Opinion
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'block' }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      "The cost is too high; we need more affordable solutions."
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      1 day ago
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Paper>

          {/* Placeholder Discussion Item 3 */}
          <Paper sx={{ mb: 1.5, p: 1, borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <ListItem alignItems="flex-start">
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <CommentIcon color="action" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    Jane Smith
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'block' }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      "What about the environmental impact of new construction?"
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      3 days ago
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Paper>
        </List>
      </Box>
    </Paper>
  );
};
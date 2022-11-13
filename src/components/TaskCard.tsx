import { MoreVert } from '@mui/icons-material'
import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const TaskCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleComplete = () => {
    console.log('completed')
    setAnchorEl(null)
  }

  return (
    <Card variant="outlined">
      <CardHeader
        action={
          <>
            <IconButton aria-label="actions" size="small" onClick={handleClick}>
              <MoreVert />
            </IconButton>
            <Menu
              id="basic-menu"
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <MenuItem onClick={handleComplete}>Mark as Complete</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>More options</MenuItem>
            </Menu>
          </>
        }
        title="Task title"
        subheader="Created: Nov 12, 2022"
      />
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Chip
            variant="filled"
            size="small"
            label="Important"
            color="success"
            onDelete={() => console.log('Delete')}
          />
          <Chip
            variant="filled"
            size="small"
            label="Issue"
            color="error"
            onDelete={() => console.log('Delete')}
          />
          <Chip
            variant="filled"
            size="small"
            label="bug"
            color="info"
            onDelete={() => console.log('Delete')}
          />
        </Box>
      </CardActions>
      <Typography
        sx={{ fontSize: '10px', color: 'darkgray', padding: '.2rem 1rem' }}
      >
        Created by Shubham
      </Typography>
    </Card>
  )
}

export default TaskCard

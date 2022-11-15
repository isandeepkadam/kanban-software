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
import { taskInterface } from '../store/taskSlice'

const TaskCard: React.FunctionComponent<taskInterface> = ({ ...note }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleComplete = () => {
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
        title={note.title}
        subheader={`Created: ${note.creationDate}`}
      />
      <Typography
        sx={{
          background: '#C1E1C1',
          fontSize: '.8em',
          width: 'max-content',
          borderRadius: '.5em',
          padding: '.1em 1em',
          marginLeft: '.5em',
        }}
      >
        {note.status}
      </Typography>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {note.tags.map((tag) => (
            <Chip
              key={tag}
              variant="filled"
              size="small"
              label={tag}
              color="success"
            />
          ))}
        </Box>
      </CardActions>
      <Typography
        sx={{ fontSize: '10px', color: 'darkgray', padding: '.2rem 1rem' }}
      >
        Created by {note.creator}
      </Typography>
    </Card>
  )
}
export default TaskCard

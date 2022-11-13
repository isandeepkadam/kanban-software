import { Add, MoreVert, Tag, TagSharp } from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  IconButton,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

const labels = ['Important', 'Bug', 'Issues']

const CreateTask = () => {
  const [tags, setTags] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event
    setTags(typeof value === 'string' ? value.split(',') : value)
    console.log(tags)
  }

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ color: 'black' }}>
        <Add sx={{ width: '50px', height: '50px' }} />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: '30rem',
            height: '15rem',
            background: 'white',
            margin: { md: '15rem 30rem' },
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Create New Task</Typography>
            <IconButton aria-label="actions" size="small">
              <MoreVert />
            </IconButton>
          </Box>

          <TextField fullWidth label="Title" type="text" />
          <TextField fullWidth type="textarea" label="Description" />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Select
              placeholder="Mark as"
              multiple
              value={tags}
              sx={{ width: '75%', margin: '10px 0' }}
              size="small"
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {labels.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
            <Button
              sx={{
                textTransform: 'capitalize',
                marginTop: '20px',
              }}
              variant="contained"
            >
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default CreateTask

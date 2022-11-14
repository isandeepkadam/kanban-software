import { Add, MoreVert } from '@mui/icons-material'
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
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import { useAppDispatch } from '../store'
import { createTask, taskInterface } from '../store/taskSlice'

const ITEM_HEIGHT = 30
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const labels = ['Important', 'Bug', 'Issue', 'High Priority']

const CreateTask = () => {
  const [tags, setTags] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [newTask, setNewTask] = useState<taskInterface>({
    id: 0,
    title: '',
    description: '',
    creationDate: '',
    tags: [],
    creator: '',
    status: '',
  })

  const dispatch = useAppDispatch()

  const handleChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event
    setTags(typeof value === 'string' ? value.split(',') : value)
  }

  const createNewTask = () => {
    const date = new Date().toDateString()
    console.log(date)
    setNewTask({
      ...newTask,
      id: Math.round(Math.random() * Date.now()),
      creationDate: date.slice(4),
      tags: tags,
      creator: 'sandy',
      status: 'completed',
    })
    dispatch(createTask(newTask))
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{ color: 'black', alignSelf: 'flex-start' }}
      >
        <Add sx={{ width: '50px', height: '50px' }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '15rem', sm: '25rem', md: '30rem' },
            minHeight: '15rem',
            background: 'white',
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

          <TextField
            fullWidth
            label="Title"
            type="text"
            name="title"
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <TextField
            fullWidth
            type="textarea"
            label="Description"
            name="description"
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormControl sx={{ mt: 1, width: 400 }}>
              <InputLabel>Mark as</InputLabel>
              <Select
                sx={{
                  width: '75%',
                  margin: '10px 0',
                }}
                variant="standard"
                multiple
                value={tags}
                size="small"
                onChange={handleChange}
                input={<OutlinedInput label="Mark as" />}
                MenuProps={MenuProps}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {labels.map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    <Checkbox checked={tags.indexOf(tag) > -1} />
                    <ListItemText primary={tag} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              sx={{
                textTransform: 'capitalize',
                mt: 2,
                maxHeight: '40px',
              }}
              variant="contained"
              onClick={createNewTask}
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

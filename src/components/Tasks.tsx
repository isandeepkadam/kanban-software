import { Card, Grid, Paper } from '@mui/material'
import CreateTask from './CreateTask'
import TaskCard from './TaskCard'
import { RootState, useAppSelector } from '../store'

const Tasks = () => {
  const notes = useAppSelector((state: RootState) => state.task)
  return (
    <Paper
      sx={{
        padding: { xs: '5rem 2rem', sm: '5rem' },
        minHeight: `100vh`,
        maxHeight: 'max-content',
      }}
    >
      <Grid container>
        {notes.map((note) => (
          <Grid
            key={note.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ padding: '20px' }}
          >
            <TaskCard {...note} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: '20px' }}>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CreateTask />
          </Card>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Tasks

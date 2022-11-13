import { Add } from '@mui/icons-material'
import { Grid, Paper } from '@mui/material'
import CreateTask from './CreateTask'
import TaskCard from './TaskCard'

const Tasks = () => {
  return (
    <Paper
      sx={{
        padding: { xs: '5rem 2rem', sm: '5rem' },
        minHeight: `100vh`,
        maxHeight: 'max-content',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: '20px' }}>
          <TaskCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: '20px' }}>
          <TaskCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: '20px' }}>
          <TaskCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: '20px' }}>
          <TaskCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: '20px' }}>
          <TaskCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: '20px' }}>
          <TaskCard />
        </Grid>
      </Grid>
      <CreateTask />
    </Paper>
  )
}

export default Tasks

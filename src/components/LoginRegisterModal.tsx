import { Button, Grid, Modal, Paper, Tab, Box } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useState } from 'react'
import { TabContext, TabPanel, TabList } from '@mui/lab'
import Login from './Login'
import Register from './Register'

const LoginRegisterModal = () => {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('1')

  const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue)
  }

  return (
    <div>
      <Button
        variant="outlined"
        sx={{ color: 'white' }}
        onClick={() => setOpen(true)}
      >
        Login
      </Button>
      <Modal
        open={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Grid container>
          <Paper
            elevation={10}
            sx={{
              position: 'relative',
              padding: 1,
              height: '80vh',
              margin: '100px auto auto',
              Width: '25rem',
            }}
          >
            <Close
              sx={{
                position: 'relative',
                left: '420px',
              }}
              onClick={() => setOpen(false)}
            ></Close>

            <TabContext value={tab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={onTabChange} variant="fullWidth">
                  <Tab label="Login" value="1" />

                  <Tab label="Sign up" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Login />
              </TabPanel>

              <TabPanel value="2">
                <Register />
              </TabPanel>
            </TabContext>
          </Paper>
        </Grid>
      </Modal>
    </div>
  )
}

export default LoginRegisterModal

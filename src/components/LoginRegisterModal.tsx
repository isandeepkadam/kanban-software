import { Button, Modal, Paper, Tab, Box, IconButton } from '@mui/material'
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
        onClick={() => setOpen(true)}
        sx={{ color: 'white' }}
      >
        Login
      </Button>
      <Modal
        open={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: 1,
            minHeight: '80vh',
            Width: { xs: '15rem', sm: '20rem', md: '25rem' },
          }}
        >
          <IconButton
            aria-label="close"
            sx={{
              left: { xs: '16rem', sm: '20rem', md: '25rem' },
              color: 'black',
            }}
            onClick={() => setOpen(false)}
          >
            <Close></Close>
          </IconButton>

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
      </Modal>
    </div>
  )
}

export default LoginRegisterModal

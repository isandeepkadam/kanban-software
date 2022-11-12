import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Modal,
  Paper,
  Tab,
  Typography,
  Box,
  FormControl,
  Input,
} from '@mui/material'
import { Close, ErrorSharp, FormatClear } from '@mui/icons-material'
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

  // const validateRegistration = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const emailRegex = /.+@(gmail|yahoo|outlook|)\.com$/i

  //   if (!registerValues.username) {
  //     setRegistrationErrors((prev) => ({
  //       ...prev,
  //       username: 'Username is required',
  //     }))
  //     setErrors(
  //       !registerValues.username
  //         ? { ...errors, usernameError: true }
  //         : { ...errors, usernameError: false }
  //     )
  //   } else {
  //     registrationErrors.username = ''
  //     setErrors({ ...errors, usernameError: false })
  //   }

  //   if (!registerValues.email) {
  //     setRegistrationErrors((prev) => ({
  //       ...prev,
  //       email: 'Email is Required',
  //     }))
  //     setErrors(
  //       !registerValues.email
  //         ? { ...errors, emailError: true }
  //         : { ...errors, emailError: false }
  //     )
  //   } else if (emailRegex.test(registerValues.email)) {
  //     setRegistrationErrors((prev) => ({
  //       ...prev,
  //       email: 'email is not valid',
  //     }))
  //     setErrors(
  //       !registerValues.email
  //         ? { ...errors, emailError: true }
  //         : { ...errors, emailError: false }
  //     )
  //   } else {
  //     setRegistrationErrors((prev) => ({
  //       ...prev,
  //       email: '',
  //     }))
  //     setErrors({ ...errors, emailError: false })
  //   }
  // }

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

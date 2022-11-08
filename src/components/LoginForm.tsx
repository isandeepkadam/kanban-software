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
  InputLabel,
  FormHelperText,
} from '@mui/material'
import { Close, ErrorSharp, FormatClear } from '@mui/icons-material'
import { useState } from 'react'
import { TabContext, TabPanel, TabList } from '@mui/lab'
import PasswordField from './PasswordField'

const LoginForm = () => {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('1')

  const [isRegister, setRegister] = useState(true)

  const [emailError, setEmailError] = useState(true)
  const [LoginValues, setLoginValues] = useState({ username: '', password: '' })

  const [errors, setErrors] = useState({
    usernameError: false,
    firstnameError: false,
    lastnameError: false,
    emailError: false,
    dateError: false,
    passwordError: false,
    confirmPasswordError: false,
  })

  const [registerValues, setRegisterValues] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    date: '',
    password: '',
    confirmPassword: '',
  })

  const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue)
    setRegister((prev) => (prev = tab === '1' ? false : true))
  }

  const handleRegisterInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget
    setRegisterValues({ ...registerValues, [name]: value })
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log(Object.fromEntries(data.entries()))
  }

  const [registrationErrors, setRegistrationErrors] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    date: '',
    password: '',
    confirmPassword: '',
  })
  const validateRegistration = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const emailRegex = /.+@(gmail|yahoo|outlook|)\.com$/i

    if (!registerValues.username) {
      setRegistrationErrors((prev) => ({
        ...prev,
        username: 'Username is required',
      }))
      setErrors(
        !registerValues.username
          ? { ...errors, usernameError: true }
          : { ...errors, usernameError: false }
      )
    } else {
      registrationErrors.username = ''
      setErrors({ ...errors, usernameError: false })
    }

    if (!registerValues.email) {
      setRegistrationErrors((prev) => ({
        ...prev,
        email: 'Email is Required',
      }))
      setErrors(
        !registerValues.email
          ? { ...errors, emailError: true }
          : { ...errors, emailError: false }
      )
    } else if (emailRegex.test(registerValues.email)) {
      setRegistrationErrors((prev) => ({
        ...prev,
        email: 'email is not valid',
      }))
      setErrors(
        !registerValues.email
          ? { ...errors, emailError: true }
          : { ...errors, emailError: false }
      )
    } else {
      setRegistrationErrors((prev) => ({
        ...prev,
        email: '',
      }))
      setErrors({ ...errors, emailError: false })
    }
  }

  console.log(registrationErrors.username)
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
              Width: '400px',
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
                <form onSubmit={handleLogin} noValidate>
                  <FormControl
                    sx={{ minWidth: '400px' }}
                    error={errors.emailError}
                    variant="standard"
                  >
                    <InputLabel required>Email / Usernames</InputLabel>
                    <Input
                      autoFocus
                      autoComplete="email"
                      type="email"
                      name="email"
                    ></Input>
                    {<FormHelperText>Mandatory</FormHelperText>}
                    <PasswordField
                      name="password"
                      value={registerValues.password}
                      label="Password"
                    />
                    <Button variant="contained" sx={{ mt: 15 }} type="submit">
                      Log In
                    </Button>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remeber Me"
                    />
                    <Typography style={{ margin: 'auto' }}>
                      Don't have an Account? Go to Sign Up
                    </Typography>
                  </FormControl>
                </form>
              </TabPanel>

              <TabPanel value="2">
                <form>
                  <FormGroup
                    sx={{ minWidth: '400px', justifyContent: 'space-around' }}
                  >
                    <FormControl
                      variant="standard"
                      error={errors.usernameError}
                    >
                      <InputLabel>Username</InputLabel>
                      <Input
                        type="text"
                        name="username"
                        value={registerValues.username}
                        onChange={handleRegisterInputChange}
                        onBlur={validateRegistration}
                      ></Input>
                      {errors.usernameError && (
                        <FormHelperText>
                          {registrationErrors.username}
                        </FormHelperText>
                      )}
                    </FormControl>

                    <FormControl
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                      }}
                    >
                      <FormControl
                        variant="standard"
                        fullWidth
                        sx={{ marginRight: 2 }}
                      >
                        <InputLabel>First Name</InputLabel>
                        <Input
                          required
                          fullWidth
                          type="text"
                          name="firstname"
                          value={registerValues.firstname}
                          onChange={handleRegisterInputChange}
                        ></Input>
                        {emailError && (
                          <FormHelperText>Mandatory</FormHelperText>
                        )}
                      </FormControl>

                      <FormControl variant="standard" fullWidth>
                        <InputLabel>Last Name</InputLabel>
                        <Input
                          fullWidth
                          type="text"
                          name="lastname"
                          onChange={handleRegisterInputChange}
                        ></Input>
                        {emailError && (
                          <FormHelperText>Mandatory</FormHelperText>
                        )}
                      </FormControl>
                    </FormControl>

                    <FormControl>
                      <InputLabel shrink={true} error={errors.dateError}>
                        Date of Birth
                      </InputLabel>
                      <Input
                        type="date"
                        name="date"
                        error={errors.dateError}
                        onChange={handleRegisterInputChange}
                      ></Input>
                      <FormHelperText>should be above 18</FormHelperText>
                    </FormControl>

                    <FormControl variant="standard" error={errors.emailError}>
                      <InputLabel>Email</InputLabel>
                      <Input
                        required
                        type="email"
                        name="email"
                        value={registerValues.email}
                        onChange={handleRegisterInputChange}
                      ></Input>
                      {emailError && <FormHelperText>Mandatory</FormHelperText>}
                    </FormControl>

                    <PasswordField />
                    <PasswordField
                      name="confirm password"
                      id="confirm password"
                      label="Confirm Passowrd"
                      value={registerValues.confirmPassword}
                    />
                    <Button
                      variant="contained"
                      onClick={() => setOpen(false)}
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </FormGroup>
                </form>
              </TabPanel>
            </TabContext>
          </Paper>
        </Grid>
      </Modal>
    </div>
  )
}

export default LoginForm

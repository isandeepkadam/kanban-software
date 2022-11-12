import { Preview, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  FormGroup,
  InputAdornment,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [registerValues, setRegisterValues] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [registerError, setRegisterError] = useState({
    firstName: false,
    lastName: false,
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const togglePassowordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleRegisterInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget
    setRegisterValues({ ...registerValues, [name]: value })
    console.log(registerValues)
  }

  const validateRegistration = () => {
    const emailRegex = /.+@(gmail|yahoo|outlook|)\.com$/i

    if (!registerValues.firstName) {
      setRegisterError({
        ...registerError,
        firstName: !registerError.firstName,
      })
    }
    // else {
    //   setRegisterError({ ...registerError, firstName: false })
    // }

    // if (!registerValues.email) {
    //   setRegisterError({ ...registerError, email: true })
    // } else {
    //   setRegisterError({ ...registerError, email: false })
    // }
  }

  return (
    <Box
      sx={{
        width: '25rem',
        height: '100%',
      }}
    >
      <form noValidate>
        <FormGroup>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <TextField
              helperText={
                registerError.firstName && 'Please enter your firstname'
              }
              label="First Name"
              fullWidth
              type="text"
              required
              error={registerError.firstName}
              sx={{ marginRight: '10px' }}
              name="firstName"
              value={registerValues.firstName}
              onChange={handleRegisterInputChange}
              onBlur={validateRegistration}
            />
            <TextField
              helperText={registerError.lastName && 'pjhsf'}
              label="Last Name"
              fullWidth
              type="text"
              error={registerError.lastName}
              name="lastName"
              value={registerValues.lastName}
              onChange={handleRegisterInputChange}
            />
          </Box>

          <TextField
            helperText={registerError.userName && 'Please enter your email'}
            label="Email"
            fullWidth
            type="email"
            error={registerError.email}
            sx={{ mt: '1em' }}
            name="email"
            value={registerValues.email}
            onChange={handleRegisterInputChange}
          />

          <TextField
            helperText={
              registerError.userName && 'please enter your username or email'
            }
            label="Username"
            fullWidth
            error={registerError.userName}
            type="text"
            sx={{ mt: '1em' }}
            name="userName"
            value={registerValues.userName}
            onChange={handleRegisterInputChange}
          />

          <TextField
            helperText={registerError.password && 'Please Enter your password'}
            label="Password"
            fullWidth
            sx={{ mt: '1em' }}
            name="password"
            error={registerError.password}
            value={registerValues.password}
            onChange={handleRegisterInputChange}
            InputProps={{
              inputProps: {
                type: showPassword ? 'text' : 'password',
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={togglePassowordVisibility}
                  sx={{ cursor: 'pointer' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }}
          />

          <TextField
            helperText={registerError.password && 'Please Enter your password'}
            label="Confirm Password"
            fullWidth
            sx={{ mt: '1em' }}
            name="confirmPassword"
            error={registerError.password}
            value={registerValues.confirmPassword}
            onChange={handleRegisterInputChange}
            InputProps={{
              inputProps: {
                type: showPassword ? 'text' : 'password',
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={togglePassowordVisibility}
                  sx={{ cursor: 'pointer' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }}
          />
          <Button sx={{ mt: '3em' }} variant="contained">
            Register
          </Button>
        </FormGroup>
      </form>
    </Box>
  )
}

export default Register

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

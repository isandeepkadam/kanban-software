import { Visibility, VisibilityOff } from '@mui/icons-material'
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
    // const emailRegex = /.+@(gmail|yahoo|outlook|)\.com$/i

    if (!registerValues.firstName) {
      setRegisterError({
        ...registerError,
        firstName: true,
      })
    } else {
      setRegisterError({
        ...registerError,
        firstName: false,
      })
    }
  }
  let emailHelperText = ''

  const validateEmail = () => {
    const emailRegex = /.+@(gmail|yahoo|outlook|)\.com$/i

    if (!registerValues.email) {
      setRegisterError({
        ...registerError,
        email: true,
      })
      emailHelperText = 'Please enter email address'
    } else if (!emailRegex.test(registerValues.email)) {
      setRegisterError({
        ...registerError,
        email: true,
      })
      emailHelperText = 'Email address is invalid'
    } else {
      setRegisterError({
        ...registerError,
        email: false,
      })
      emailHelperText = ''
    }
  }

  return (
    <Box
      sx={{
        width: { xs: '15rem', sm: '20rem', md: '25rem' },
        height: '100%',
      }}
    >
      <form noValidate autoComplete="true">
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
            helperText={emailHelperText}
            label="Email"
            fullWidth
            type="email"
            error={registerError.email}
            sx={{ mt: '1em' }}
            name="email"
            value={registerValues.email}
            onChange={handleRegisterInputChange}
            onBlur={validateEmail}
          />

          <TextField
            helperText={registerError.userName && 'please enter your username'}
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

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
  const togglePassowordVisibility = () => {
    setShowPassword(!showPassword)
  }

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

  const handleRegisterInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget
    setRegisterValues({ ...registerValues, [name]: value })
  }

  const emailRegex = /.+@(gmail|yahoo|outlook|)\.com$/i
  const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/i
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

  const validateFirstName = () => {
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

  const validateEmail = () => {
    if (!registerValues.email || !emailRegex.test(registerValues.email)) {
      setRegisterError({
        ...registerError,
        email: true,
      })
    } else {
      setRegisterError({
        ...registerError,
        email: false,
      })
    }
  }

  const validateUserName = () => {
    if (
      !registerValues.userName ||
      !usernameRegex.test(registerValues.userName)
    ) {
      setRegisterError({
        ...registerError,
        userName: true,
      })
    } else {
      setRegisterError({
        ...registerError,
        userName: false,
      })
    }
  }

  const validatePassword = () => {
    if (
      !registerValues.password &&
      !passwordRegex.test(registerValues.password)
    ) {
      setRegisterError({
        ...registerError,
        password: true,
      })
    } else {
      setRegisterError({
        ...registerError,
        password: false,
      })
    }
  }

  const validateConfirmPassword = () => {
    if (
      !registerValues.confirmPassword ||
      registerValues.confirmPassword !== registerValues.password
    ) {
      setRegisterError({
        ...registerError,
        confirmPassword: true,
      })
    } else {
      setRegisterError({
        ...registerError,
        confirmPassword: false,
      })
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
              onBlur={validateFirstName}
            />
            <TextField
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
            helperText={
              (registerError.email &&
                !registerValues.email &&
                'Please enter your Email address') ||
              (registerError.email &&
                !emailRegex.test(registerValues.email) &&
                'Email address is not valid')
            }
            label="Email"
            fullWidth
            type="email"
            required
            error={registerError.email}
            sx={{ mt: '1em' }}
            name="email"
            value={registerValues.email}
            onChange={handleRegisterInputChange}
            onBlur={validateEmail}
          />

          <TextField
            helperText={
              (registerError.userName &&
                !registerValues.userName &&
                'please enter username') ||
              (registerError.userName &&
                !usernameRegex.test(registerValues.userName) &&
                'Invalid! Username should contain (Aa-Zz)(0-9)(. and _) and cannot start or end with (.)')
            }
            label="Username"
            fullWidth
            required
            error={registerError.userName}
            type="text"
            sx={{ mt: '1em' }}
            name="userName"
            value={registerValues.userName}
            onChange={handleRegisterInputChange}
            onBlur={validateUserName}
          />

          <TextField
            helperText={
              (registerError.password &&
                !registerValues.password &&
                'Please enter password') ||
              (registerError.password &&
                !passwordRegex.test(registerValues.password) &&
                'Invalid! At least one lowercase, uppercase, number, and symbol shuold exist in a 8+ character length password')
            }
            label="Password"
            fullWidth
            required
            sx={{ mt: '1em' }}
            name="password"
            error={registerError.password}
            value={registerValues.password}
            onChange={handleRegisterInputChange}
            onBlur={validatePassword}
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
            helperText={
              registerError.confirmPassword && "Password Doesn't match"
            }
            label="Confirm Password"
            fullWidth
            required
            sx={{ mt: '1em' }}
            name="confirmPassword"
            error={registerError.confirmPassword}
            value={registerValues.confirmPassword}
            onChange={handleRegisterInputChange}
            onBlur={validateConfirmPassword}
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
          <Button sx={{ mt: { xs: '2em', md: '3em' } }} variant="contained">
            Register
          </Button>
        </FormGroup>
      </form>
    </Box>
  )
}

export default Register

import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  FormGroup,
  InputAdornment,
  TextField,
} from '@mui/material'
import { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loginValues, setLoginValues] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState({
    username: false,
    passoword: false,
  })

  const togglePassowordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLoginInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget
    setLoginValues({ ...loginValues, [name]: value })
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <Box
      sx={{
        width: { xs: '15rem', sm: '20rem', md: '25rem' },
        height: '100%',
        mt: '1rem',
      }}
    >
      <form noValidate onSubmit={handleLogin}>
        <FormGroup>
          <TextField
            helperText={
              loginError.username && 'please enter your username or email'
            }
            label="Username / Email"
            fullWidth
            error={loginError.username}
            sx={{ mt: '1em' }}
            name="username"
            value={loginValues.username}
            onChange={handleLoginInput}
          />

          <TextField
            helperText={loginError.passoword && 'Please Enter your password'}
            label="Password"
            fullWidth
            name="password"
            sx={{ mt: '1em' }}
            error={loginError.passoword}
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
          <Button sx={{ mt: '7em' }} variant="contained" type="submit">
            Login
          </Button>
        </FormGroup>
      </form>
    </Box>
  )
}

export default Login

import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
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
  const [loginError, setLoginError] = useState({
    firstName: true,
    lastName: true,
    usernName: true,
    email: true,
    password: true,
    confirmPassword: true,
  })

  const togglePassowordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleRegistedInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget
    setRegisterValues({ ...registerValues, [name]: value })
    console.log(registerValues)
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
              helperText={loginError.firstName && 'Please enter your firstname'}
              label="First Name"
              fullWidth
              type="text"
              required
              error={loginError.firstName}
              sx={{ marginRight: '10px' }}
              name="firstName"
              value={registerValues.firstName}
              onChange={handleRegistedInputChange}
            />
            <TextField
              helperText={loginError.lastName && 'pjhsf'}
              label="Last Name"
              fullWidth
              type="text"
              error={loginError.lastName}
              name="lastName"
              value={registerValues.lastName}
              onChange={handleRegistedInputChange}
            />
          </Box>

          <TextField
            helperText={loginError.usernName && 'Please enter your email'}
            label="Email"
            fullWidth
            type="email"
            error={loginError.email}
            sx={{ mt: '1em' }}
            name="email"
            value={registerValues.email}
            onChange={handleRegistedInputChange}
          />

          <TextField
            helperText={
              loginError.usernName && 'please enter your username or email'
            }
            label="Username"
            fullWidth
            error={loginError.usernName}
            type="text"
            sx={{ mt: '1em' }}
            name="userName"
            value={registerValues.userName}
            onChange={handleRegistedInputChange}
          />

          <TextField
            helperText={loginError.password && 'Please Enter your password'}
            label="Password"
            fullWidth
            sx={{ mt: '1em' }}
            name="password"
            error={loginError.password}
            value={registerValues.password}
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
            helperText={loginError.password && 'Please Enter your password'}
            label="Confirm Password"
            fullWidth
            sx={{ mt: '1em' }}
            name="confirmPassword"
            error={loginError.password}
            value={registerValues.confirmPassword}
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
            Login
          </Button>
        </FormGroup>
      </form>
    </Box>
  )
}

export default Register

// {/* <form>
//                   <FormGroup
//                     sx={{ minWidth: '400px', justifyContent: 'space-around' }}
//                   >
//                     <FormControl
//                       variant="standard"
//                       error={errors.usernameError}
//                     >
//                       <InputLabel>Username</InputLabel>
//                       <Input
//                         type="text"
//                         name="username"
//                         value={registerValues.username}
//                         onChange={handleRegisterInputChange}
//                         onBlur={validateRegistration}
//                       ></Input>
//                       {errors.usernameError && (
//                         <FormHelperText>
//                           {registrationErrors.username}
//                         </FormHelperText>
//                       )}
//                     </FormControl>

//                     <FormControl
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-around',
//                         flexDirection: 'row',
//                       }}
//                     >
//                       <FormControl
//                         variant="standard"
//                         fullWidth
//                         sx={{ marginRight: 2 }}
//                       >
//                         <InputLabel>First Name</InputLabel>
//                         <Input
//                           required
//                           fullWidth
//                           type="text"
//                           name="firstname"
//                           value={registerValues.firstname}
//                           onChange={handleRegisterInputChange}
//                         ></Input>
//                         {emailError && (
//                           <FormHelperText>Mandatory</FormHelperText>
//                         )}
//                       </FormControl>

//                       <FormControl variant="standard" fullWidth>
//                         <InputLabel>Last Name</InputLabel>
//                         <Input
//                           fullWidth
//                           type="text"
//                           name="lastname"
//                           onChange={handleRegisterInputChange}
//                         ></Input>
//                         {emailError && (
//                           <FormHelperText>Mandatory</FormHelperText>
//                         )}
//                       </FormControl>
//                     </FormControl>

//                     <FormControl>
//                       <InputLabel shrink={true} error={errors.dateError}>
//                         Date of Birth
//                       </InputLabel>
//                       <Input
//                         type="date"
//                         name="date"
//                         error={errors.dateError}
//                         onChange={handleRegisterInputChange}
//                       ></Input>
//                       <FormHelperText>should be above 18</FormHelperText>
//                     </FormControl>

//                     <FormControl variant="standard" error={errors.emailError}>
//                       <InputLabel>Email</InputLabel>
//                       <Input
//                         required
//                         type="email"
//                         name="email"
//                         value={registerValues.email}
//                         onChange={handleRegisterInputChange}
//                       ></Input>
//                       {emailError && <FormHelperText>Mandatory</FormHelperText>}
//                     </FormControl>

//                     <PasswordField />
//                     <PasswordField
//                       name="confirm password"
//                       id="confirm password"
//                       label="Confirm Passowrd"
//                       value={registerValues.confirmPassword}
//                     />
//                     <Button
//                       variant="contained"
//                       onClick={() => setOpen(false)}
//                       type="submit"
//                     >
//                       Sign Up
//                     </Button>
//                   </FormGroup>
//                 </form> */}

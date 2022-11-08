import React, { useState } from 'react'
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const PasswordField: React.FunctionComponent<{
  id?: string
  label?: string
  value?: string
  name?: string
}> = ({ id = 'password', label = 'Password', value, name }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <FormControl sx={{ mb: 1 }} variant="standard">
      <InputLabel>{label}</InputLabel>
      <Input
        id={id}
        name={name}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="start">
            <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      ></Input>
      {/* <FormHelperText>Necessary</FormHelperText> */}
    </FormControl>
  )
}

export default PasswordField

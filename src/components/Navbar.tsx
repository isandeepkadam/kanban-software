import {
  Adb as AdbIcon,
  Menu as MenuIcon,
  Clear as ClearIcon,
  Search as SearchIcon,
} from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Toolbar,
  Typography,
} from '@mui/material'
import { ReactElement, useState } from 'react'

const pages = ['Backlog', 'Completed', 'Login']
type IMobileView = {
  handleOpenNavMenu: (_event: React.MouseEvent<HTMLElement>) => void
  handleCloseNavMenu: () => void
  anchorElNav: HTMLElement | null
}
const MobileView = ({
  anchorElNav,
  handleCloseNavMenu,
  handleOpenNavMenu,
}: IMobileView) => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Kanban
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}
const Navbar = (): ReactElement => {
  const [showSearch, setShowSearch] = useState(false)
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileView
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
          />
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: showSearch ? 'none' : 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Kanban
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <IconButton
            aria-label="search"
            size="large"
            color="inherit"
            sx={{
              display: { xs: showSearch ? 'none' : 'flex', md: 'none' },
            }}
            onClick={() => setShowSearch(true)}
          >
            <SearchIcon />
          </IconButton>
          <TextField
            placeholder="Search Task"
            size={`${showSearch ? 'small' : 'medium'}`}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setShowSearch(false)}
                  sx={{
                    display: {
                      xs: showSearch ? 'flex' : 'none',
                      md: 'none',
                    },
                  }}
                >
                  <ClearIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              display: {
                xs: showSearch ? 'inline-block' : 'none',
                md: 'inline-block',
              },
              backgroundColor: 'white',
              color: '#1d2021',
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

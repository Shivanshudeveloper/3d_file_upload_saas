import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

// redux import
import { useDispatch, useSelector } from 'react-redux'
import { SET_THEME_MODE } from 'store/actions'

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles'
import { Avatar, Box, ButtonBase, Button, IconButton } from '@material-ui/core'
import { Brightness4, Brightness7, VideoCall } from '@material-ui/icons'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// project imports
import LogoSection from '../LogoSection'
import SearchSection from './SearchSection'
import ProfileSection from './ProfileSection'
import NotificationSection from './NotificationSection'
// assets
import { IconMenu2 } from '@tabler/icons'

// style constant
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  headerAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    transition: 'all .2s ease-in-out',
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&:hover': {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
    },
  },
  boxContainer: {
    width: '228px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
}))

// ===========================|| MAIN NAVBAR / HEADER ||=========================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()

  const colorMode = localStorage.getItem('colorMode')
    ? JSON.parse(localStorage.getItem('colorMode'))
    : theme.palette.mode

  const [mode, setMode] = useState(colorMode)
  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const changeTheme = async () => {
      try {
        dispatch({ type: SET_THEME_MODE, mode })
        localStorage.setItem('colorMode', JSON.stringify(mode))
      } catch (error) {
        console.log(error)
      }
    }

    changeTheme()
  }, [dispatch, mode])

  return (
    <>
      {/* logo & toggler button */}
      <div className={classes.boxContainer}>
        <Box
          component='span'
          sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
        >
          <h2>COMPANY LOGO</h2>
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant='rounded'
            className={classes.headerAvatar}
            onClick={handleLeftDrawerToggle}
            color='inherit'
          >
            <IconMenu2 stroke={1.5} size='1.3rem' />
          </Avatar>
        </ButtonBase>
      </div>

      {/* header search */}
      <SearchSection theme='light' />
      <div className={classes.grow} />
      <div className={classes.grow} />

      {/* toggle between light and dark mode */}
      
    

      <IconButton sx={{ mr: 1 }} onClick={toggleColorMode} color='inherit'>
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      {/* notification & profile */}
     

      <NotificationSection />
      <ProfileSection />
    </>
  )
}

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
}

export default Header

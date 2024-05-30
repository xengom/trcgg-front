import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../trcLogo.png";
import HonerList from "./HonerList";
import '../../styles/Search.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
}));

export default function SearchConsole() {
  return (
    <>
      <div className="Search">
        <img src={logo} alt="logo" style={{width: '10vw', height: '10vw', marginTop: '10vh'}}/>
        <Box sx={{ flowShrink: 1, marginTop: '1vh' }}>
          <Search sx={{ backgroundColor: '#282934'}}>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="검색할 소환사 명"
              inputProps={{'aria-label': 'search'}}/>
          </Search>
        </Box>

        <p>
          <h5>명예의 전당 - TRC 역대 우승팀</h5>
        </p>
        <Box sx={{ flexGrow: 1, marginTop: '-3vh' }}>
          <HonerList />
        </Box>
      </div>
    </>
  );
}
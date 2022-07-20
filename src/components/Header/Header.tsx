import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import React from 'react';

const StyledHeader = styled(Typography)``;

const Header = () => {
  return (
    <Paper>
      <StyledHeader variant='h1'>Header 1</StyledHeader>
      <StyledHeader variant='h2'>Header 2</StyledHeader>
      <StyledHeader variant='h3'>Header 3</StyledHeader>
      <StyledHeader variant='subtitle1'>Subititle 1</StyledHeader>
      <StyledHeader variant='subtitle2'>Subititle 2</StyledHeader>
    </Paper>
  );
};

export default Header;

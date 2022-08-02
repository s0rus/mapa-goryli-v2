import { theme } from '@/styles/theme';
import { Box, Container, Stack } from "@mui/material";
import styled from '@emotion/styled';

export const MenuContent = styled(Box)`
  min-height: 100vh;
  max-width: 420px;
  min-width: 420px;
`;

export const MenuContainer = styled(Container)`
  width: 100%;
  min-height: inherit;
  border-radius: 0;

  background-color: ${theme.palette.background.default};
`;

export const CurrentUserContainer = styled(Stack)`
  /* background-color: red; */
  align-items: center;
`;

export const CurrentUserInfo = styled(Stack)`
  width: 100%;
  align-items: center;
`;

export const CurrentUserMenu = styled(Stack)`
  width: 100%;
  margin-left: 1rem;
`;

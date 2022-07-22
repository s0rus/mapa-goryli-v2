import { theme } from '@/styles/theme';
import { Box, Container } from '@mui/material';
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

import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { Box, Card, Container, Grid } from '@mui/material';

export const AuthContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  background-color: ${theme.palette.background.paper};
`;

export const AuthContainer = styled(Container)`
  min-height: 100vh;
  min-width: 100%;
`;

export const AuthWrapper = styled(Grid)`
  min-height: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthCard = styled(Card)`
  padding: ${theme.spacing(4)};
  margin-top: auto;
  max-width: 448px;
  border: 1px solid ${theme.palette.primary.main};

  box-shadow: ${theme.shadows[10]};
  background-color: ${theme.palette.background.default};
`;

export const AuthFooter = styled(Grid)`
  margin-top: auto;
  margin-bottom: 1rem;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  color: ${theme.palette.primary.main};
`;

import { theme } from "@/styles/theme";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const MainLayoutContent = styled(Box)`
  min-height: 100vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  background-color: ${theme.palette.background.paper};
`;

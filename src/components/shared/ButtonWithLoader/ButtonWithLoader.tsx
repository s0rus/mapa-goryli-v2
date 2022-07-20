import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import styled from '@emotion/styled';

export interface ButtonWithLoaderProps extends ButtonProps {
  loading: boolean;
}

const StyledButton = styled(Button)`
  height: ${({ size }) => (size === 'large' ? '46px' : size === 'medium' ? '36px' : '32px')};
`;

const ButtonWithLoader: React.FC<ButtonWithLoaderProps> = ({
  children,
  loading,
  startIcon,
  size = 'large',
  ...props
}) => {
  return (
    <StyledButton startIcon={loading ? '' : startIcon} size={size} {...props}>
      {loading ? <CircularProgress data-testid='buttonWithLoader--spinner' size={22} /> : children}
    </StyledButton>
  );
};

export default ButtonWithLoader;

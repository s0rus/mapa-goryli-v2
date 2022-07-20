import { Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { AuthCard, AuthContainer, AuthContent, AuthFooter, AuthWrapper } from './AuthLayout.styles';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthContent>
      <AuthContainer>
        <AuthWrapper>
          <AuthCard>{children}</AuthCard>
          <AuthFooter container>
            <Typography variant='subtitle1'>created by @soruse</Typography>
          </AuthFooter>
        </AuthWrapper>
      </AuthContainer>
    </AuthContent>
  );
};

export default AuthLayout;

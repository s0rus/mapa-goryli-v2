import { Avatar, ButtonGroup, Skeleton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import ButtonWithLoader from '../shared/ButtonWithLoader';
import { CurrentUserContainer, CurrentUserInfo, CurrentUserMenu, MenuContainer, MenuContent } from './Menu.styles';

const Menu = () => {
  const { data: session, status } = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await signOut();
  };

  console.log(session);

  const CurrentUserAvatar = () => {
    if (session && session.user && session.user.image && status === 'authenticated') {
      return (
        <Avatar
          variant='rounded'
          src={session.user.image}
          alt={`${session.user.name} avatar`}
          sx={{
            width: '64px',
            height: '64px',
          }}
        />
      );
    }
    return <Skeleton />;
  };

  return (
    <MenuContent>
      <MenuContainer>
        <Typography variant='h1' textAlign='center'>
          MAPA GORYLI
        </Typography>
        <CurrentUserContainer direction='column'>
          <CurrentUserInfo direction='row'>
            <CurrentUserAvatar />
            <CurrentUserMenu>
              <Typography variant='h2'>{session?.user?.name}</Typography>
              <ButtonGroup fullWidth variant='contained'>
                <ButtonWithLoader size='small' onClick={handleLogout} loading={isLoggingOut} disabled={isLoggingOut}>
                  WYLOGUJ SIĘ
                </ButtonWithLoader>
                <ButtonWithLoader size='small' onClick={() => {}} loading={false} disabled={false}>
                  WYPISZ SIĘ
                </ButtonWithLoader>
              </ButtonGroup>
            </CurrentUserMenu>
          </CurrentUserInfo>
        </CurrentUserContainer>
      </MenuContainer>
    </MenuContent>
  );
};

export default Menu;

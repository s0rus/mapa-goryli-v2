import Map from '@/components/Map';
import ButtonWithLoader from '@/components/shared/ButtonWithLoader';
import AuthLayout from '@/layouts/AuthLayout';
import { Typography } from '@mui/material';
import { DiscordIcon } from 'assets/DiscordIcon';
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [isLogginIn, setIsLoggingIn] = useState(false);

  const handleDiscordLogin = async () => {
    setIsLoggingIn(true);
    await signIn('discord');
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      {session ? (
        <AuthLayout>
          <Typography variant='h1'>MAPA GORYLI</Typography>
          <ButtonWithLoader
            loading={isLogginIn}
            disabled={isLogginIn || status === 'authenticated'}
            fullWidth
            variant='contained'
            startIcon={<DiscordIcon />}
            onClick={handleDiscordLogin}
          >
            ZALOGUJ SIĘ
          </ButtonWithLoader>
        </AuthLayout>
      ) : (
        <Map />
      )}
    </>
  );
};

export default Home;

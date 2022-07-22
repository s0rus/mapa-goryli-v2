import { signOut } from 'next-auth/react';
import React, { useState } from 'react';
import ButtonWithLoader from '../shared/ButtonWithLoader';
import { MenuContainer, MenuContent } from './Menu.styles';

const Menu = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await signOut();
  };

  return (
    <MenuContent>
      <MenuContainer>
        <ButtonWithLoader
          onClick={handleLogout}
          loading={isLoggingOut}
          disabled={isLoggingOut}
          variant='contained'
          size='medium'
        >
          WYLOGUJ SIĘ
        </ButtonWithLoader>
      </MenuContainer>
    </MenuContent>
  );
};

export default Menu;

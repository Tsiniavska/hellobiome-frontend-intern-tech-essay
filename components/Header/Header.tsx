// * Components
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

// * Types
import { EButton } from '@/types/button.types';

const Header = () => {
  return (
    <header className="flex bg-secondary min-h-20 items-center fixed top-0 right-0 left-0 w-full z-50">
      <div className="wrapper flex justify-between items-center">
        <Logo />
        <Navigation />
        <Button type={EButton.BUTTON} text="Login" />
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;

import cn from 'classnames';

import { Logo } from '../logo';
import { Link } from '../link';
import { Navbar, Navbar__Item } from 'components/navbar';
import { Button } from 'components/button';

import './header.scss';

export type TMainNavigationItem = {
  text: string;
  href: string;
}

interface IMainNavigationProps {
  mainNavigationItems: TMainNavigationItem[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Header = (props: IMainNavigationProps): JSX.Element => {
  const { mainNavigationItems, onClick } = props;

  return (
    <header className='header'>
      <div className='header__container'>
        <Logo className='header__logo' href='#' />
        <nav>
          <Navbar className='header__navbar'>
            {mainNavigationItems.map((item, index) => (
              <Navbar__Item key={index}>
                <Link className='navbar__link' href={item.href}>
                  {item.text}
                </Link>
              </Navbar__Item>
            ))}
          </Navbar>
        </nav>
        <Button
          className={cn('header__button')}
          view='primary'
          size='s'
          onClick={onClick}
        >
          Войти
        </Button>
      </div>
    </header>
  );
};

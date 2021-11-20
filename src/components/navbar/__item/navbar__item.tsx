import cn from 'classnames';

import './navbar__item.scss';

interface INavbar__ItemProps {
  children: React.ReactNode;
}

export const Navbar__Item = (props: INavbar__ItemProps): JSX.Element => {
  const { children } = props;
  return (
    <li className={cn('navbar__item')}>{children}</li>
  );
};

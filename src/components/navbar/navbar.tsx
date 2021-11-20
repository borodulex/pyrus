import cn from 'classnames';

import './navbar.scss';

interface INavbarProps {
  className: string;
  children: React.ReactNode;
}

export const Navbar = (props: INavbarProps): JSX.Element => {
  const { className, children } = props;

  return (
    <ul className={cn(className, 'navbar')}>{children}</ul>
  );
};

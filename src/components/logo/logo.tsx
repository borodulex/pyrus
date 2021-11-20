import cn from 'classnames';

import { Link } from '../link';
import { ReactComponent as SvgLogo } from '../../images/logo.svg';

import './logo.scss';

interface LogoProps {
  className: string;
  href: string;
}

export const Logo = (props: LogoProps): JSX.Element => {
  const { className, href } = props;

  return (
    <Link className={cn('logo', className)} href={href} tabIndex={0}>
      <SvgLogo title='Логотип Котопочта'/>
    </Link>
  );
};

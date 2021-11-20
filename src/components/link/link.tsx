import cn from 'classnames';

import './link.scss';

interface ILinkProps {
  className: string;
  href: string;
  tabIndex?: number;
  children: React.ReactNode;
}

export const Link = (props: ILinkProps): JSX.Element => {
  const {
    className,
    href,
    tabIndex,
    children
  } = props;

  return (
    <a className={cn(className, 'link')} href={href} tabIndex={tabIndex}>{children}</a>
  );
};

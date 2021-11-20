import cn from 'classnames';

import './button.scss';

export interface IButtonProps {
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  className?: string;
  view?: 'primary' | 'ghost';
  size?: 's' | 'm';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button= (props: IButtonProps): JSX.Element => {
  const {
    addonBefore,
    addonAfter,
    children,
    view = 'primary',
    size = 'm',
    className,
    ...restButtonProps
  } = props;

  return (
    <button
      className={cn(
        className,
        'button',
        {
          [`button_${view}`]: view,
          [`button_${size}`]: size,
        },
      )}
      type="button"
      {...restButtonProps}
    >
      {addonBefore && <span className={cn('button__addon')}>{addonBefore}</span>}
      {children && <span className={cn('button__text')}>{children}</span>}
      {addonAfter && <span className={cn('button__addon')}>{addonAfter}</span>}
    </button>
  );
};

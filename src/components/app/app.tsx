import { Header } from 'components/header';
import { MAIN_NAVIGATION_ITEMS } from '../../shared/constants/main-navigation-items';

export const App = (): JSX.Element => {
  const handleLogin = () =>
    alert(
      'Личный кабинет находится в разработке, приносим искренние извинения 🥺. За котиков не беспокойтесь — мы читаем им письма из архива.'
    );
  return (
    <div className="app">
      <Header mainNavigationItems={MAIN_NAVIGATION_ITEMS} onClick={handleLogin} />
    </div>
  );
};

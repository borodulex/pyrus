import { Header } from 'components/header';
import { MainPage } from 'components/main-page';
import { MAIN_NAVIGATION_ITEMS } from 'shared/constants/main-navigation-items';

export const App = (): JSX.Element => {
  const handleLogin = () =>
    alert(
      'Личный кабинет находится в разработке, приносим искренние извинения 🥺. За котиков не беспокойтесь — мы читаем им письма из архива.'
    );

  const handleSubmit = () =>
    alert(
      'Форма находится в разработке. В это время мы прикладываем все усилия, чтобы котики не заскучали: чешем им пузико, играемся с лазерной указкой и т.д.'
    );

  return (
    <div className="app">
      <Header mainNavigationItems={MAIN_NAVIGATION_ITEMS} onLogin={handleLogin} />
      <MainPage onSubmit={handleSubmit} />
    </div>
  );
};

import cn from 'classnames';

import { Button } from 'components/button';
import { ReactComponent as SvgPawIcon } from 'images/icon-paw.svg';

import './main-page.scss';

interface IMainPageProps {
  onSubmit: () => void;
}

export const MainPage = (props: IMainPageProps): JSX.Element => {
  const { onSubmit } = props;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={cn('main-page')}>
      <div className={cn('main-page__container')}>
        <main className={cn('main-page__content')}>
          <div className={cn('main-page__question')}>
            <h1 className={cn('main-page__title')}>Как это работает?</h1>
            <p className={cn('main-page__text')}>
              Наши коты любят, когда с ними разговаривают. Напишите письмо, и мы
              прочитаем его котам, когда они придут почесать пузо.
            </p>
          </div>
          <div className={cn('main-page__question')}>
            <h2 id="message-faq" className={cn('main-page__title')}>
              Что передать котам?
            </h2>
            <p className={cn('main-page__text')}>
              Можно рассказать где вы видели вкусных мышей, какого размера
              синицы прилетели в город, или просто интересную историю из жизни.
            </p>
          </div>
          <form
            className={cn('main-page__form', 'form')}
            noValidate
            name="send-message-form"
            aria-labelledby="message-faq"
            onSubmit={handleSubmit}
          >
            <label htmlFor="main-text" className={cn('form__label')}>
              Сообщение
            </label>
            <textarea
              id="main-text"
              className={cn('form__item', 'form__item_el_main-text')}
              name="main-text"
              placeholder="Что-нибудь хорошее"
              rows={6}
              required
            />
            <fieldset className={cn('form__input-container')}>
              <legend className={cn('form__label')}>
                Дополнительные опции
              </legend>
              <ul className={cn('form__list')}>
                <li className={cn('form__list-item')}>
                  <label
                    className={cn('form__label', 'form__label_direction_right')}
                  >
                    <input
                      className={cn('form__item', 'form__item_el_extra-option')}
                      type="checkbox"
                      name="extra-option"
                      value="Сделать пуньк в нос"
                    />
                    <span
                      className={cn(
                        'form__pseudo-item',
                        'form__pseudo-item_type_checkbox'
                      )}
                    />
                    Сделать пуньк в нос
                  </label>
                </li>
                <li className={cn('form__list-item')}>
                  <label
                    className={cn('form__label', 'form__label_direction_right')}
                  >
                    <input
                      className={cn('form__item', 'form__item_el_extra-option')}
                      type="checkbox"
                      name="extra-option"
                      value="Угостить вкусняшкой"
                    />
                    <span
                      className={cn(
                        'form__pseudo-item',
                        'form__pseudo-item_type_checkbox'
                      )}
                    />
                    Угостить вкусняшкой
                  </label>
                </li>
              </ul>
            </fieldset>
            <fieldset className={cn('form__input-container')}>
              <legend className={cn('form__label')}>Контакты для связи</legend>
              <div className={cn('form__input-group')}>
                <label
                  htmlFor="name"
                  className={cn('form__label', 'form__label_direction_left')}
                >
                  Ваше имя
                </label>
                <input
                  id="name"
                  className={cn('form__item', 'form__item_el_text')}
                  type="text"
                  required
                />
              </div>
              <div className={cn('form__input-group')}>
                <label
                  htmlFor="email"
                  className={cn('form__label', 'form__label_direction_left')}
                >
                  Email
                </label>
                <input
                  id="email"
                  className={cn('form__item', 'form__item_el_text')}
                  type="email"
                  placeholder="youremail@catmail.org"
                  required
                />
                <span className={cn('form__item-caption')}>
                  Мы вышлем вам фото довольного кошачьего лица
                </span>
              </div>
            </fieldset>
            <Button
              className={cn('form__button')}
              type="submit"
              addonBefore={<SvgPawIcon />}
            >
              Отправить
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
};

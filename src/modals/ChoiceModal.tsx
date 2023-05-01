import { FC } from 'react';

import { Icon56FavoriteOutline } from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';
import { Button, ButtonGroup, ModalCard } from '@vkontakte/vkui';

interface Props {
  nav: string;
  onClose: () => void;
}
export const ChoiceModal: FC<Props> = ({ nav, onClose }) => {
  const story = () => {
    bridge
      .send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url: 'https://sun9-65.userapi.com/c850136/v850136098/1b77eb/0YK6suXkY24.jpg',
        attachment: {
          text: 'book',
          type: 'photo',
          owner_id: 743784474,
          id: 12345678
        }
      })
      .then((data) => {
        if (data.result) {
          // Редактор историй открыт
          console.log(data);
        }
      })
      .catch((error) => {
        // Ошибка
        console.log(error);
      });
  };

  const share = () => {
    bridge
      .send('VKWebAppShare', {
        link: 'https://vk.com/vkappsdev'
      })
      .then((data) => {
        if (data) {
          console.log(data);
        }
      })
      .catch((error) => {
        // Ошибка
        console.log(error);
      });
  };

  return (
    <ModalCard
      id={nav}
      onClose={onClose}
      icon={<Icon56FavoriteOutline />}
      header="Выберите, как именно хотите поделиться"
      actions={
        <ButtonGroup stretched>
          <Button key="story" size="l" mode="secondary" stretched onClick={story}>
            Поделиться историей
          </Button>
          <Button key="lenta" size="l" mode="primary" stretched onClick={share}>
            Поделиться на стене
          </Button>
        </ButtonGroup>
      }
    />
  );
};

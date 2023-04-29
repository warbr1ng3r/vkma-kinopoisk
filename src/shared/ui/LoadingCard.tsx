import { Card, Spinner } from '@vkontakte/vkui';

export const LoadingCard = () => {
  return (
    <Card>
      <Spinner style={{ height: '400px' }} size="large" />
    </Card>
  );
};

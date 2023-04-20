import { ContentCard } from '@vkontakte/vkui';

export const FilmCard = () => {
  return (
    <ContentCard
      onClick={() => {}}
      src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
      alt="Picture of brown and gray mountains under blue sky during daytime photo"
      subtitle="unsplash"
      header="brown and gray mountains under blue sky during daytime photo"
      text="Mountain changji"
      caption="Photo by Siyuan on Unsplash"
      maxHeight={150}
    />
  );
};

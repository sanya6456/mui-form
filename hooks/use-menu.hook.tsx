import ListItemType from 'feature/aside-list/types/list-item.type';
import { useQuery } from 'react-query';

const fetchMenu = async () => {
  const res = await fetch(`/api/menu`);

  const resJson = await res.json();

  if (res.status !== 200) throw new Error(resJson.error);

  return resJson;
};

const useMenu = () =>
  useQuery<ListItemType[], Error>('menu', () => fetchMenu(), {
    staleTime: 60000 * 1,
    cacheTime: 60 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2

  });

export { fetchMenu, useMenu };

import { List, ListItem, ListItemButton, Typography, useTheme } from '@mui/material'
import { useMenu } from 'hooks/use-menu.hook';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import ListItemType from './types/list-item.type';

type Props = {
  currentMenuItem: ListItemType | null | undefined;
  setCurrentMenuItem: Dispatch<SetStateAction<ListItemType | null | undefined>>;
}

const AsideList: FC<Props> = (props: Props) => {
  const { setCurrentMenuItem, currentMenuItem } = props;
  const theme = useTheme();

  const { data: list, isError, error } = useMenu();
  if (isError) throw new Error(error.message);

  const initialMenuItem = list?.filter(item => item.isDefault === true)[0] || null;

  const isActive = (menuItem: ListItemType) => menuItem.id == currentMenuItem?.id;

  useEffect(() => {
    if (initialMenuItem) setCurrentMenuItem(initialMenuItem);
  }, [initialMenuItem])


  return (
    <>
      <List sx={{ bgcolor: theme.palette.grey[200] }}>
        {list?.map((item) => (
          <ListItem key={item.id}>
            <ListItemButton onClick={() => setCurrentMenuItem(item)}>
              <Typography color={isActive(item) ? theme.palette.info.main : ''}>{item.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default AsideList
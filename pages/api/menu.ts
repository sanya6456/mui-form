import ListItemType from 'feature/aside-list/types/list-item.type'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse<ListItemType[]>) => {
  const list: ListItemType[] = [
    { id: 1, name: 'Lorem ipsum', isDefault: false },
    { id: 2, name: 'Dolor sit amet', isDefault: false },
    { id: 3, name: 'Groups', isDefault: true }
  ]

  res.status(200).json(list);
}

export default handler

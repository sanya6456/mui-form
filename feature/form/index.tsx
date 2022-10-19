import { Box, Button, FormControl, MenuItem, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, FC } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListItemType from 'feature/aside-list/types/list-item.type';

const selectOptions = ['Department', 'Team', 'Sub Team'];

type Props = {
  currentMenuItem: ListItemType | null | undefined;
  title?: string;
}

const Form: FC<Props> = (props: Props) => {
  const { title, currentMenuItem } = props;
  const [selectOption, setSelectOption] = React.useState(selectOptions[0]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSelectOption(event.target.value);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', columnGap: '1rem' }}>
        {title && <Typography component='h2' fontSize='1.5rem'>{title}</Typography>}
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Box>
      {currentMenuItem?.id === 3 && <FormControl fullWidth sx={{ paddingY: '2rem' }}>
        <TextField label="Name" variant="outlined" />
        <TextField
          sx={{ marginTop: '2rem' }}
          select
          value={selectOption}
          onChange={handleChange}
        >
          {selectOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button size='large' variant="outlined" type='submit' sx={{ display: 'flex', marginRight: 'auto', marginTop: '3rem' }}>Create</Button>
      </FormControl>}
    </>
  )
}

export default Form
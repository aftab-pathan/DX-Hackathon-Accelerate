import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

const searchByList = [
  {label:"All", value:"all"},
  {label:"Skills", value:"skills"},
  {label:"Domain", value:"domain"},
  {label:"Client", value:"client"},
  {label:"Duration", value:"duration"},
]
const SearchInputBox = () => {
  const [searchBy, setSearchBy] = useState<string>(searchByList[0].value);

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', height: '40px' }}
    >
      <FormControl variant="standard"  sx={{ m: 1, minWidth: 100 }} >
      <Select
        labelId="select Search By"
        id="select-search-by"
        value={searchBy}
        label="Search By"
        onChange={(event: SelectChangeEvent) => setSearchBy(event.target.value)}
      >
        {searchByList.map((item, index) => (
          <MenuItem key={`${index}-${item.label}`} value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Work"
        inputProps={{ 'aria-label': 'search work' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <CiSearch />
      </IconButton>
    </Paper>
  )
}

export default SearchInputBox
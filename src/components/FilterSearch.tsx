import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterSearch = () => {
    return (
        <FormGroup style={{display: "flex",flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Open" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Best Fit" />
            <FormControlLabel control={<Checkbox />} label="In Progress" />
            <FormControlLabel control={<Checkbox />} label="Closed" />
        </FormGroup>
    )
}

export default FilterSearch
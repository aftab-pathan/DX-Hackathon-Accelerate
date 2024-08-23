import { Divider, Grid } from "@mui/material"
import SearchInputBox from "../components/SearchInputBox"
import FilterSearch from "../components/FilterSearch"
import WorkCard from "../components/WorkCard"

const HomePage = () => {
  return (
    <div style={{ padding: 20 }}>
        <Grid container spacing={1} style={{display: "flex", justifyContent: "space-around",marginBottom: 20}}>
            <Grid xs={12} md={5}>
                <SearchInputBox />
            </Grid>
            <Grid xs={12} md={5}>
                <FilterSearch />
            </Grid>
        </Grid>
        <Divider />
        <div >
            <WorkCard />
            <WorkCard />
        </div>
    </div>
  )
}

export default HomePage
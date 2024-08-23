
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WorkCard = () => {
    return (
        <Card sx={{ display: 'flex', marginTop: "20px" }}>
            <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: "50%", justifyContent: "space-between" , borderRight: "1px solid gray", padding: "10px"}}>
                    <div>
                    <Typography component="div" variant="h5">
                        Work Title
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Work description
                    </Typography>
                    </div>
                    <div>
                    <Typography component="div" variant="h5">
                        Status
                    </Typography> 
                    </div>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "50%",padding: "10px" }}>
                    <Typography component="div" variant="subtitle1">
                        Created By : 
                    </Typography>
                    <Typography variant="subtitle1"  component="div">
                        Estimated : 
                    </Typography>
                    <Typography variant="subtitle1"  component="div">
                        Category : 
                    </Typography>
                    <Typography variant="subtitle1"  component="div">
                        Skills : 
                        {/* chips  */}
                    </Typography>
                    <Typography variant="subtitle1"  component="div">
                        Payout : 
                    </Typography>
                    
                    
                </Box>
            </CardContent>
        </Card>
      );
}

export default WorkCard;
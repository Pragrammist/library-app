import { Box, Stack, Typography, useTheme } from "@mui/material";
import CardProjectVerticalModel from "../card-project-vertical.model";
import { getSize } from "../../get-size";


export default function CardProjectVertical({model} : {model:CardProjectVerticalModel})
{
    const theme = useTheme();
    
    const sizes = getSize(model.imgSize, theme);

    return <Stack direction="column" style={{
        height: "fit-content",
        width: sizes.width
    }}>
        <Box component="div" style={{
            width: sizes.width,
            height: sizes.height
        }}>
            <Box 
                component="img"
                src={model.imgUrl}
                marginBottom={(theme)=> theme.spacing(3)}
                width="100%"
                height="100%"
            />
        </Box>
        <Stack
            marginTop={3}
            marginBottom={3}
        >
            <Typography variant="h2">
                {model.date}
            </Typography>
            <Typography variant="h2">
                {model.title}
            </Typography>
        </Stack>
    </Stack>
}
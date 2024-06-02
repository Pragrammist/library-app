import { Stack, Typography } from "@mui/material";
import { ThirdyBottomMargin } from "../containers/secondary-container/secondary-container";

export default function TextList({title, textArray} : TextListProps){
    const textElements = textArray.map(text => 
        <Typography variant="h3" marginBottom={2}>
            {text}
        </Typography>
    );
    return <Stack direction="column">
        <ThirdyBottomMargin>
            <Typography variant="h1">
                {title}
            </Typography>
        </ThirdyBottomMargin>
        {textElements}
    </Stack>
}
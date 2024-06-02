import { Link, Stack, Typography } from "@mui/material";
import { SecondaryPaddings, ThirdyBottomMargin } from "../containers/secondary-container/secondary-container";

export default function LinksList({textArray, title} : LinkListProps){

    const elementArrays = textArray.map(data => <Typography marginBottom={2} variant="h3"><Link href={data.link}>{data.linkText}</Link> - {data.text}</Typography>)

    
    return <Stack direction="column">
        <ThirdyBottomMargin>
            <SecondaryPaddings>
                <Typography variant="h1">
                    {title}
                </Typography>
            </SecondaryPaddings>
        </ThirdyBottomMargin>
        {elementArrays}
    </Stack>
}
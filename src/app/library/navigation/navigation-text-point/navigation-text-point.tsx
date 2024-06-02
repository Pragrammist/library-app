import { Link, Stack, Typography } from "@mui/material";
import { ThirdyBottomMargin } from "../../containers/secondary-container/secondary-container";

export default function NavigationTextPoint({textPoint}: {textPoint: string})
{
    return <ThirdyBottomMargin>
        <Stack direction="row" spacing={1}>
            <Typography variant="h3">Главная</Typography>
            <Typography variant="h3">{">>"}</Typography>
            <Link href="/" variant="h3">{textPoint}</Link>
        </Stack>
    </ThirdyBottomMargin>
}
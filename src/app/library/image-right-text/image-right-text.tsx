import { Box, Stack, Typography } from "@mui/material";
import { InfoBackground, PrimaryBottomMargin, TertiaryPaddings } from "../containers/secondary-container/secondary-container";


export default function ImageRightText({upperText, lowwerText, imgUrl}:{upperText: string, lowwerText: string, imgUrl: string}){
    return <PrimaryBottomMargin>
        <Stack direction="row">
            <InfoBackground
                sx={{
                    display: {
                        xs: "none",
                        sm: "none",
                        lg: "flex"
                    },
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "block",
                        maxWidth:790,
                        maxHeight:460,
                        width: "auto",
                        height: "auto",
                    }}
                    component="img" 
                    src={imgUrl}
                />
            </InfoBackground>
            <InfoBackground>
                <TertiaryPaddings>
                    <Stack spacing={5}>
                        <Typography variant="caption" textTransform="uppercase" color={(t) => t.palette.primary.contrastText}>
                            {upperText}
                        </Typography>
                        <Typography variant="caption" textTransform="uppercase">
                            {lowwerText}
                        </Typography>
                    </Stack>
                </TertiaryPaddings>
            </InfoBackground>
        </Stack>
    </PrimaryBottomMargin>
}
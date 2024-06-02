import { Box, Button, Link, Stack, Typography } from "@mui/material";
import CardProjectVerticalModel from "../card-project-vertical.model";
import CardProjectVertical from "../card-project-vertical/card-project-vertical";
import { PrimaryBottomMargin, SecondaryBottomMargin, SecondaryPaddings } from "@/app/library/containers/secondary-container/secondary-container";

export default function CardProjectVerticalList ({title, projects, buttonText, redirectTo}: {title: string, projects: CardProjectVerticalModel[], buttonText: string, redirectTo: string}){
    const projectList = projects.map(model => <CardProjectVertical model={model}/>)
    const itemStyles = {
        sx : {
            alignSelf: "center"
        },
        style: {
            width: "fit-content"
        }
    }
    return <PrimaryBottomMargin 
        style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
        }}
    >
        <Stack>
            <SecondaryBottomMargin>
                <SecondaryPaddings>
                    <Typography variant="h1">
                        {title}
                    </Typography>
                </SecondaryPaddings>
            </SecondaryBottomMargin>
            {projects.length > 0 &&
                <SecondaryBottomMargin>
                    <Stack direction="row" spacing={2} width="fit-content" flexWrap="wrap" justifyContent="center">
                        {projectList}
                    </Stack>
                </SecondaryBottomMargin>
            }
            <Link {...itemStyles} href={redirectTo}>
                <Button color="info">
                    {buttonText}
                </Button>
            </Link>
        </Stack>
    </PrimaryBottomMargin>
}
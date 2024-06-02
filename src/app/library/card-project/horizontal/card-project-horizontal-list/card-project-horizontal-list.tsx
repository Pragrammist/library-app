import { Stack } from "@mui/material";
import CardProjectHorizontalModel from "../card-project-horizontal.model";
import CardProjectHorizontal from "../card-project-horizontal/card-project-horizontal";

export default function CardProjectHorizontalList({projects, search} : {projects:CardProjectHorizontalModel[], search?:string | null}){
    const list = projects.map(model => <CardProjectHorizontal search={search}  model={model} />);

    return <Stack>
        {list}
    </Stack>

}
import { Link, Stack, StackProps, Typography, TypographyProps } from "@mui/material"
import { navigationList } from "../navigation-list"

export default function NavigationList(props: { textProps? : TypographyProps, stackProps?: StackProps}){
    const navigation = navigationList.map(data => <Typography variant="h3" {...props.textProps}><Link href={data.hrefValue}>{data.text}</Link></Typography>)
    return  <Stack  {...props.stackProps}>
        {navigation}    
    </Stack>;
}
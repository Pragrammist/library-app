import { Box, Stack, Typography, TypographyProps, useTheme } from "@mui/material";
import CardProjectHorizontalModel from "../card-project-horizontal.model";
import { InfoBackground, TertiaryPaddings, ThirdyBottomMargin } from "@/app/library/containers/secondary-container/secondary-container";
import { getSize } from "../../get-size";
import { ReactNode } from "react";

export default function CardProjectHorizontal({model, search} : {model:CardProjectHorizontalModel, search?:string | null})
{
    const theme = useTheme();
    
    const sizes = getSize(model.imgSize, theme);


    const OuterStackProps = model.isInfoBg ? { } :
    {
        maxWidth: theme.breakpoints.values.xl
    };
    
    function IsLeftSidePaddings ({children} : {children:ReactNode}) {
        return model.isInfoBg ? <TertiaryPaddings>{children}</TertiaryPaddings> : <>{children}</>
    }

    function HighlitedText({ children, typographyProps}: {children: string, typographyProps?: TypographyProps}){

        const isSearch = search ? true : false;

        function SplitedText(){
            if(!search)
                return <></>;
            
            const loweredChildren = children.toLowerCase();
            const loweredSearch = search.toLowerCase();

            const regexExpr = new RegExp(search, 'i');

            const highlitedText = children.match(regexExpr);

            const backgroundColor = model.isInfoBg ? theme.palette.secondary.main : theme.palette.info.main;

            const highlitedElement = <Typography component="label" sx={{
                backgroundColor: backgroundColor,
                fontSize: "inherit",
                fontFamily: "inherit",
                lineHeight: "inherit"
            }}>{highlitedText}</Typography>;

            if(loweredChildren === loweredSearch)
                return <Typography {...typographyProps}>
                    {highlitedElement}
                </Typography>;


            if(!loweredChildren.includes(loweredSearch))
                return <Typography {...typographyProps}>{children}</Typography>
            
            
            const splitedText = children.split(regexExpr);

            function concatIfHasEmpty ()
            {
                return splitedText.map(str => str === '' ? highlitedElement : str);
            }

            function concatIfHasNoEmpty ()
            {
                return [splitedText[0], highlitedElement, splitedText[1]];
            }

            const hasEmpty = splitedText.includes('');
            
            const res = hasEmpty ? concatIfHasEmpty() : concatIfHasNoEmpty();

            return <Typography {...typographyProps}>
                {...res}
            </Typography>
        }

        return isSearch 
        ? <SplitedText/>
        : <Typography {...typographyProps}>{children}</Typography>;
    }

    function Content(){
        return <Stack direction={model.isReverse ? "row-reverse" : "row"} spacing={3} {...OuterStackProps}>
            <Box component="div"
                sx={{
                    width: sizes.width,
                    height: sizes.height                        
                }}
            >
                <Box 
                    component="img"
                    src={model.imgUrl}
                    width={sizes.width}
                    height={sizes.height}
                />
            </Box>
            <IsLeftSidePaddings>
                <Stack>
                    <HighlitedText typographyProps={{ variant: "h1"}} >
                        {model.date}
                    </HighlitedText>
                    <ThirdyBottomMargin />
                    <HighlitedText typographyProps={{ variant: "h1"}} >
                        {model.title}
                    </HighlitedText>
                    <ThirdyBottomMargin />
                    <HighlitedText typographyProps={{ variant: "h2"}} >
                        {model.paragraph}
                    </HighlitedText>
                </Stack>
            </IsLeftSidePaddings>
        </Stack>;
        
    }

    function IsDifferentBackground({children} : {children:ReactNode}){
        return model.isInfoBg ? <InfoBackground>{children}</InfoBackground> : <>{children}</>
    }


    return <>
        <IsDifferentBackground>
            <Content />
        </IsDifferentBackground>
        <ThirdyBottomMargin />
    </>
}
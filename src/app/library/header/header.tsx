"use client"
import { CssBaseline, Link, Stack, StackProps, ThemeProvider, Typography } from "@mui/material";
import { mainTheme, sizeVariables } from "../themes/main-theme";
import NavigationList from "../navigation/naviation-list/navigation-list";
import { PrimaryBackground, PrimaryPaddings, SecondaryBackground, SecondaryPaddings, ThirdyBottomMargin } from "../containers/secondary-container/secondary-container";
import SearchInput from "../search/search-input/search-input";

export default function Header()
{

    const stackProps:StackProps = {
        direction:{
            sm: "column",
            md: "row"
        },
        alignItems: {
            sm: "flex-start",
            md: "center"
        }, 
        justifyContent: {
            sm: "flex-start",
            lg: "center"
        }, 
        spacing: {
            sm: mainTheme.spacing(1.5),
            md: mainTheme.spacing(8)
        }
    }

    const secondaryStackProps:StackProps = {
        direction:{
            sm: "column",
            lg: "row"
        },
        alignItems: {
            sm: "flex-start",
            lg: "center"
        }, 
        justifyContent: {
            sm: "flex-start",
            lg: "center"
        }, 
        spacing: {
            sm: mainTheme.spacing(1.5),
            lg: mainTheme.spacing(3)
        }
    }
    
    return <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        
        <PrimaryBackground>
            <PrimaryPaddings>
                <Stack alignItems="center">
                    <Stack {...stackProps} maxWidth={sizeVariables.maxWidthHeaderContent}>
                        <Typography variant="h1" maxWidth={sizeVariables.maxWidthheaderTitle}>
                            Центральная городская публичная библиотека имени А. П. Чехова
                        </Typography>
                        <Stack {...secondaryStackProps} >
                            <Link variant="h3" href="/login">
                                Вход
                            </Link >
                            <Link variant="h3" href="/register">
                                Регистрация
                            </Link>
                            <SearchInput 
                                sizes={{
                                    height: 8,
                                    width: 40
                                }}
                                label="" 
                                componentsProps={{
                                box:{ sx:{ backgroundColor: mainTheme.palette.primary.main } },
                                icon:{ sx:{ fill: mainTheme.palette.primary.contrastText } } }}/>
                        </Stack>
                    </Stack>
                </Stack>
            </PrimaryPaddings>
        </PrimaryBackground>
        <SecondaryBackground>
            <PrimaryPaddings sx={{paddingTop: 2}}>
                <SecondaryPaddings>
                    <NavigationList 
                        stackProps={{
                            ...secondaryStackProps,
                            spacing: { sm: mainTheme.spacing(1.5), xl: mainTheme.spacing(9) } }} />
                </SecondaryPaddings>
                <ThirdyBottomMargin />                        
            </PrimaryPaddings>            
        </SecondaryBackground>
        
    </ThemeProvider>
}   
"use-client"
import { createTheme } from "@mui/material";
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";
    
export const kyivTypeSans: NextFont = localFont({
    src: "../../../../public/fonts/KyivTypeSans-VarGX.ttf",
    display: "swap",
});

export const jetbrainsMono: NextFont = localFont({
    src: "../../../../public/fonts/JetBrainsMono.ttf",
    display: "swap",
});
 
// Font files can be colocated inside of `pages`


const primaryColor = '#3E2B20';
const secondaryColor = '#FFEBC5';
const infoColor = '#FF7346';

const primary = {
    main: primaryColor,
    light: primaryColor,
    dark: primaryColor,
    contrastText: secondaryColor,
};

const secondary = {
    main: secondaryColor,
    light: secondaryColor,
    dark: secondaryColor,
    contrastText: primaryColor
}
const info = {
    main: infoColor,
    light: infoColor,
    dark: infoColor,
    contrastText: primaryColor
};

const defaultTheme = createTheme({})

export const mainTheme  = createTheme({
    typography:{
        h1:{
            fontFamily: kyivTypeSans.style.fontFamily,
            fontSize: "35px",
            fontWeight: "500",
            textTransform: "uppercase",
            lineHeight: "52.5px"
        },
        button:{
            fontFamily: kyivTypeSans.style.fontFamily,
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "24px"
        },
        caption:{
            fontFamily: jetbrainsMono.style.fontFamily,
            fontSize: "25px",
            fontWeight: "bold",
            lineHeight: "37.5px"
        },
        h2:{
            fontFamily: jetbrainsMono.style.fontFamily,
            fontSize: "20px",
            lineHeight: "30px",
        },
        h3:{
            fontFamily: jetbrainsMono.style.fontFamily,
            fontSize: "25px",
            lineHeight: "33px"
        }
    },
    
    components:{
        MuiButton:{
            variants:[
                {   
                    props:{ 
                        color: "secondary",
                        
                    },
                    style({theme}) {
                        return {
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.contrastText,
                            '&:hover':{
                                backgroundColor: theme.palette.secondary.contrastText,
                                color: theme.palette.secondary.main
                            }
                        }
                    }
                },
                {
                    props:{ 
                        color: "info",
                        
                    },
                    style({theme}) {
                        return {
                            backgroundColor: theme.palette.info.main,
                            color: theme.palette.info.contrastText,
                            '&:hover':{
                                backgroundColor: theme.palette.info.contrastText,
                                color: theme.palette.info.main
                            }
                        }
                    }
                }
            ],
            defaultProps:{
                sx(theme) {
                    return {
                        height: theme.spacing(10),
                        width: theme.spacing(43)
                    }
                },
            }
        },
        MuiInput: {
            defaultProps: {
                disableUnderline: true,
            }
        },

        MuiLink:{
            variants:[
                {
                    props: {
                        variant: "button"
                    },
                    style: {
                        fontDecoration: "none",
                        "&:hover":{
                            opacity: 0.8
                        }
                    }
                    
                }
            ],

            defaultProps:{
                color: "inherit",
                sx:{
                    "&:hover":{
                        opacity: 0.8
                    }
                },
            }
        },

        MuiTextField:{
            variants:[
                {
                    props:{
                        type: "file"
                    },

                    style:{
                        inputProps:{
                            sx:{
                                display: "none"
                            }
                        }
                    }
                },
            ],
            defaultProps:{
                style:{
                    height: "fit-content",
                    
                },

                variant:"standard",
                InputLabelProps:{
                    sx (theme){
                        return {
                            fontFamily: kyivTypeSans.style.fontFamily,
                            marginLeft: theme.spacing(2),
                            marginTop: theme.spacing(0.5)
                        }
                    },
                },
                inputProps:{
                    disableUnderline: true,
                    sx:{
                        padding: 0,
                        paddingLeft: defaultTheme.spacing(2),
                        paddingRight: defaultTheme.spacing(2),
                        paddingBottom: defaultTheme.spacing(1),
                        marginTop: 0,
                        fontFamily: kyivTypeSans.style.fontFamily,
                        fontSize: 20,                        
                        height: defaultTheme.spacing(8),
                        width: defaultTheme.spacing(40),
                        borderRadius: defaultTheme.spacing(2),
                    },
                },
                sx(theme) {
                    return {
                        backgroundColor: theme.palette.primary.contrastText,
                        marginRight: theme.spacing(1),
                        borderRadius: theme.spacing(2),
                        borderBottom: 0,                        
                    }
                },
            },
            styleOverrides:{
                root:{
                    styles:{
                        borderBottom: 0  
                    }
                }
            }
        }
        
    },
    palette:{
        primary : primary,
        secondary: secondary,
        info: info
    },

});

export const sizeVariables = {
    maxWidthHeaderContent: 1424,
    maxWidthheaderTitle: 1047,
    marginLeftCatalog: 20
}
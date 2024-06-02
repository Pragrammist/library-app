"use client"
import { Alert, CssBaseline, Stack, ThemeProvider, Typography } from "@mui/material";
import NavigationList from "../navigation/naviation-list/navigation-list";
import { mainTheme, sizeVariables } from "../themes/main-theme";
import { FourthPadding, PrimaryBackground } from "../containers/secondary-container/secondary-container";
import FormInput from "../form/form-input/form-input";
import CheckIcon from '@mui/icons-material/CheckCircleOutline';

export default function Footer() {
    return <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <PrimaryBackground>
            <FourthPadding>
                <Stack alignItems="center">
                    <Stack direction="row" justifyContent="center" spacing={20} maxWidth={sizeVariables.maxWidthHeaderContent}>
                        <Stack>
                            <Typography variant="h2" maxWidth={mainTheme.spacing(64)}>
                                © ЦГПБ имени А.П. Чехова
                                МБУК Централизованная библиотечная система
                                г. Таганрога
                            </Typography>
                            <Typography variant="h2">
                                Все права защищены.
                            </Typography>
                        </Stack>
                        <NavigationList stackProps={{
                            spacing: mainTheme.spacing(2)
                        }} />
                        
                        <Stack width={mainTheme.spacing(60)}>
                            <FormInput 
                                label="Подпишитесь на нашу рассылку"
                                placeholder="почта"
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </FourthPadding>
        </PrimaryBackground>
    </ThemeProvider>
}
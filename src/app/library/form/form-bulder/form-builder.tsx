import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { FormPadding, InfoBackground, LargeBottomMargin, SecondaryBackground, SecondaryBottomMargin, ThirdyBottomMargin } from "../../containers/secondary-container/secondary-container";
import FormInput, { FormInputProps } from "../form-input/form-input"


interface FormBuilderInterface {
    title: string, 
    
    inputs: FormInputProps[]
}




export default function FormBuilder ({title, inputs} : FormBuilderInterface) {

    const FormInputs = () => {
        return inputs.map(input => <FormInput {...input} />);
    };

    return (
        <SecondaryBackground>
            <InfoBackground maxWidth={(theme) => theme.spacing(75)} sx={{
                margin: "0 auto",
                display: "block"
            }}>
                <FormPadding>
                    <Stack>
                        <Typography alignSelf="center" variant="h1">{title}</Typography>
                        <ThirdyBottomMargin/>
                        <FormInputs />
                        <SecondaryBottomMargin/>
                        <Link href="/" alignSelf="center">
                            <Button color="secondary">Продолжить</Button>
                        </Link>
                        <ThirdyBottomMargin />
                    </Stack>
                    
                </FormPadding>
            </InfoBackground>
            <LargeBottomMargin/>
            <Stack/>
        </SecondaryBackground>
    )
}
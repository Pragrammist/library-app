import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

export const PrimaryPaddings = styled(Box)<BoxProps>(({theme}) => ({
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  paddingTop: theme.spacing(1), 
  paddingBottom: theme.spacing(1),
}));
export const SecondaryPaddings = styled(Box)<BoxProps>(({theme}) => ({
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  
  paddingTop: theme.spacing(0), 
  paddingBottom: theme.spacing(0),
}));

export const PrimaryBackground = styled(Box)<BoxProps>(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText
}));

export const SecondaryBackground = styled(Box)<BoxProps>(({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText
}));

export const InfoBackground = styled(Box)<BoxProps>(({theme}) => ({
  backgroundColor: theme.palette.info.main,
  color: theme.palette.info.contrastText
}));

export const TertiaryPaddings = styled(Box)<BoxProps>(({theme}) => ({
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(10), 
  paddingBottom: theme.spacing(10),
}));

export const PrimaryBottomMargin = styled(Box)<BoxProps>(({theme}) => ({
  marginBottom: theme.spacing(9)
}));

export const SecondaryBottomMargin = styled(Box)<BoxProps>(({theme}) => ({
  marginBottom: theme.spacing(6)
}));

export const ThirdyBottomMargin = styled(Box)<BoxProps>(({theme}) => ({
  marginBottom: theme.spacing(4)
}));

export const FourthPadding = styled(Box)<BoxProps>(({theme}) => ({
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  paddingTop: theme.spacing(7), 
  paddingBottom: theme.spacing(7),
}));

export const LargeBottomMargin = styled(Box)<BoxProps>(({theme}) => ({
  marginBottom: theme.spacing(13)
}));

export const FormPadding = styled(Box)<BoxProps>(({theme}) => ({
  padding: theme.spacing(5)
}));





import { Theme } from "@mui/material";


//не пиксели, а spacing, то есть каждое число нужно помножать на множитель
//который выставлен в теме
export type CardImgSize = "73x62" | "41x46" | "89x62" | "99x75" | "43x48";

export const getSize = (imgSize: CardImgSize, theme: Theme) => {

    const sizes = imgSize.split("x");

    return {
        width: theme.spacing(Number.parseInt(sizes[0])),
        height: theme.spacing(Number.parseInt(sizes[1]))
    }
}
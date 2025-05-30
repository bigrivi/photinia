import {
    alpha,
    darken,
    lighten,
    Paper as MuiPaper,
    styled,
} from "@mui/material";
import { paperClasses, PaperProps } from "@mui/material/Paper";

export const Paper = styled(({ children, ...rest }: PaperProps) => {
    return <MuiPaper {...rest}>{children}</MuiPaper>;
})(({ theme }) => ({
    [`&.${paperClasses.root}`]: {
        overflow: "hidden",
        borderRadius: 8,
        border: `1px solid ${
            theme.palette.mode === "light"
                ? lighten(alpha(theme.palette.divider, 1), 0.88)
                : darken(alpha(theme.palette.divider, 1), 0.68)
        }`,
        boxShadow: "none",
        width: "100%",
    },
    ["& .MuiTableRow-root:last-child td"]: {
        borderBottom: "0px solid",
    },
}));

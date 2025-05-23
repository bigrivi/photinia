import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

type Props = {
    onCloseClick: () => void;
    title?: string;
};

export const DrawerHeader = ({ title, onCloseClick }: Props) => {
    return (
        <>
            <Box
                display="flex"
                borderRadius="0"
                height="60px"
                alignItems="center"
                px="24px"
            >
                {title && <Typography variant="h6">{title}</Typography>}
                <IconButton
                    onClick={onCloseClick}
                    sx={{
                        marginLeft: "auto",
                    }}
                >
                    <Close />
                </IconButton>
            </Box>
            <Divider />
        </>
    );
};

import { ColorModeContext } from "@/contexts";
import i18n from "@/i18n";
import { IUser } from "@/interfaces";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
    useGetIdentity,
    useGetLocale,
    useSetLocale,
    useTranslate,
} from "@refinedev/core";
import {
    HamburgerMenu,
    type RefineThemedLayoutV2HeaderProps,
} from "@refinedev/mui";
import { useContext } from "react";

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = () => {
    const { mode, setMode } = useContext(ColorModeContext);

    const changeLanguage = useSetLocale();
    const locale = useGetLocale();
    const currentLocale = locale();
    const { data: user } = useGetIdentity<IUser | null>();

    const t = useTranslate();

    return (
        <AppBar
            color="default"
            position="sticky"
            elevation={0}
            sx={{
                "& .MuiToolbar-root": {
                    minHeight: "64px",
                },
                height: "64px",
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                backgroundColor: (theme) => theme.palette.background.paper,
            }}
        >
            <Toolbar
                sx={{
                    paddingLeft: {
                        xs: "0",
                        sm: "16px",
                        md: "24px",
                    },
                }}
            >
                <Box
                    minWidth="40px"
                    minHeight="40px"
                    marginRight={{
                        xs: "0",
                        sm: "16px",
                    }}
                    sx={{
                        "& .MuiButtonBase-root": {
                            marginLeft: 0,
                            marginRight: 0,
                        },
                    }}
                >
                    <HamburgerMenu />
                </Box>

                <Stack
                    direction="row"
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={{
                        xs: "8px",
                        sm: "24px",
                    }}
                >
                    <Stack direction="row" flex={1}></Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={{
                            xs: "8px",
                            sm: "24px",
                        }}
                    >
                        <Select
                            defaultValue={currentLocale}
                            slotProps={{
                                input: {
                                    "aria-label": "Without label",
                                },
                            }}
                            variant="outlined"
                            sx={{
                                width: {
                                    xs: "120px",
                                    sm: "160px",
                                },
                                "& .MuiSelect-outlined": {
                                    minHeight: "auto !important",
                                },
                            }}
                        >
                            {[...(i18n.languages ?? [])]
                                .sort()
                                .map((lang: string) => (
                                    <MenuItem
                                        selected={currentLocale === lang}
                                        key={lang}
                                        defaultValue={lang}
                                        onClick={() => {
                                            changeLanguage(lang);
                                        }}
                                        value={lang}
                                    >
                                        <Stack direction="row">
                                            <img
                                                loading="lazy"
                                                src={
                                                    "images/flags/" +
                                                    lang +
                                                    ".svg"
                                                }
                                                width="20"
                                                style={{ marginRight: 6 }}
                                            ></img>
                                            <Typography color="text.secondary">
                                                {lang === "en"
                                                    ? "English"
                                                    : "简体中文"}
                                            </Typography>
                                        </Stack>
                                    </MenuItem>
                                ))}
                        </Select>

                        <IconButton
                            onClick={() => {
                                setMode();
                            }}
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.mode === "dark"
                                        ? "transparent"
                                        : "#00000014",
                            }}
                        >
                            {mode === "dark" ? (
                                <BrightnessHighIcon />
                            ) : (
                                <Brightness4Icon
                                    sx={{
                                        fill: "#000000DE",
                                    }}
                                />
                            )}
                        </IconButton>

                        <Stack
                            direction="row"
                            gap={{
                                xs: "8px",
                                sm: "16px",
                            }}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography
                                fontSize={{
                                    xs: "12px",
                                    sm: "14px",
                                }}
                                variant="subtitle2"
                            >
                                {user?.user_name}
                            </Typography>
                            <Avatar alt={user?.user_name} />
                        </Stack>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

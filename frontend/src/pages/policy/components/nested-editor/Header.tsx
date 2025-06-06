import { BorderedCell } from "@/components";
import { IAction, IRole } from "@/interfaces";
import { CheckBoxOutlineBlank, LibraryAddCheck } from "@mui/icons-material";
import {
    Divider,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    TableRow,
} from "@mui/material";
import { useTranslate } from "@refinedev/core";
import classNames from "classnames";
import { useState } from "react";
import { usePolicyProviderContext } from "../../context";
import { useHighLightRowColumnContext } from "./context";
import { StickColumn } from "./StickColumn";

export const Header = () => {
    const { filteredRoles, filteredResources, handleActionSelectionChange } =
        usePolicyProviderContext();
    const t = useTranslate();
    const { column: highlightColumn } = useHighLightRowColumnContext();
    const [openRole, setOpenRole] = useState<IRole>();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClose = () => {
        setAnchorEl(null);
        setOpenRole(undefined);
    };

    const handleMenuItemClick = (key: string) => {
        if (!openRole) {
            return;
        }
        const roleId = openRole.id;
        const allActions: IAction[] | undefined = filteredResources?.flatMap(
            (item) => item.actions as IAction[]
        );
        const allActionIds = allActions.map((item) => item.id);
        if (allActions && key == "allowAll") {
            handleActionSelectionChange(true, roleId, allActionIds);
        } else if (key == "clear") {
            handleActionSelectionChange(false, roleId, allActionIds);
        }
        handleClose();
    };

    const handleCellClick = (
        event: React.MouseEvent<HTMLTableCellElement>,
        role: IRole
    ) => {
        setAnchorEl(event.currentTarget);
        setOpenRole(role);
    };
    const open = Boolean(anchorEl);
    return (
        <>
            <TableRow>
                <StickColumn
                    align={"left"}
                    style={{
                        minWidth: 176,
                        width: 176,
                        zIndex: 100,
                    }}
                >
                    {t("policy.resource")}
                </StickColumn>
                {filteredRoles.map((role, col) => {
                    return (
                        <BorderedCell
                            key={role.id}
                            className={classNames("hover", {
                                highlight: highlightColumn == col,
                            })}
                            onClick={(evt) => handleCellClick(evt, role)}
                            align={"center"}
                            style={{
                                minWidth: 176,
                                width: 176,
                                zIndex: 99,
                            }}
                        >
                            {role.name}
                        </BorderedCell>
                    );
                })}
                <BorderedCell></BorderedCell>
            </TableRow>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem disableRipple disabled>
                    <ListItemText>{openRole?.name}</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleMenuItemClick("clear")}>
                    <ListItemIcon>
                        <CheckBoxOutlineBlank />
                    </ListItemIcon>
                    <ListItemText>Clear Permissions</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("allowAll")}>
                    <ListItemIcon>
                        <LibraryAddCheck />
                    </ListItemIcon>
                    <ListItemText>Allow All</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
};

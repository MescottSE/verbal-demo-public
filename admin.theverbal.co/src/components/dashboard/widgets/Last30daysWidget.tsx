import { Box, Typography } from "@material-ui/core";
import { DashboardStats } from "common/build/api-parameters/users";
import React from "react";
import { useFetch } from "../../../contexts/fetch.context";
import { HeadlineFigureWidget } from "./HeadlineFigureWidget";

export const Last30daysWidget = (): JSX.Element => {
    const { item } = useFetch<DashboardStats>();
    const totalStories30 = item?.totalStories30;

    return (
        <HeadlineFigureWidget header="Total Stories">
            <Box>
                <Typography variant="h2">{totalStories30}</Typography>
            </Box>
        </HeadlineFigureWidget>
    );
};

import { Box, Button, Container, Grid } from "@material-ui/core";
import { DashboardStats } from "common/build/api-parameters/users";
import React from "react";
import { getStats } from "../../client/api/users";
import { useAuth } from "../../contexts/auth.context";
import { FetchProvider } from "../../contexts/fetch.context";
import { TotalStoriesWidget } from "./widgets/TotalStoriesWidget";
import { Last30daysWidget } from "./widgets/Last30daysWidget";

export const Dashboard = (): JSX.Element => {
    const { logout } = useAuth();
    return (
        <Container maxWidth={"md"}>
            <Box pt={3}>
                <FetchProvider<DashboardStats> noun="stats" getItem={getStats} fetchOnload>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TotalStoriesWidget/>
                        </Grid>
                        <Grid item xs={12}>
                            <Last30daysWidget />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={() => logout()}>
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </FetchProvider>
            </Box>
        </Container>
    );
};

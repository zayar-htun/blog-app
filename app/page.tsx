import { Box, Typography } from "@mui/material";
import AllPosts from "../components/AllPosts";
import { getAllPost } from "../apicall";

export default async function Home() {
    const posts = await getAllPost();

    return (
        <>
            <Box textAlign="center">
                <Typography
                    sx={{ mt: 4, mb: 8, fontWeight: "bold" }}
                    variant="h4"
                >
                    Blog App
                </Typography>
            </Box>

            <Box>
                <AllPosts posts={posts} />
            </Box>
        </>
    );
}

"use client";

import React from "react";
import Link from "next/link";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import { Post } from "../apicall";

interface AllPostsProps {
    posts: Post[];
}

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
    return (
        <Box>
            <Container>
                <h3 style={{ mb: 2 }}>All Posts</h3>
                <Grid container spacing={2}>
                    {posts.map(post => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <Card
                                sx={{
                                    bgcolor: "rgba(255, 255, 255, 0.9)",
                                    my: 2,
                                    p: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "28px",
                                        }}
                                    >
                                        Title - &nbsp;
                                    </Typography>
                                    <Typography sx={{ fontSize: "32px" }}>
                                        {post.title}
                                    </Typography>
                                </Box>

                                <Divider sx={{ my: 2 }} />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                    >
                                        {post.body}
                                    </Typography>
                                </CardContent>
                                <Link
                                    href={`/posts/${post.id}`}
                                    style={{ color: "blue" }}
                                >
                                    See Detail . . .
                                </Link>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AllPosts;

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
                {posts.map((post) => (
                    <Card
                        sx={{
                            bgcolor: "rgba(255, 255, 255, 0.9)",
                            my: 2,
                            p: 2,
                        }}
                        key={post.id}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
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
                            <Typography variant="h6" color="text.primary">
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
                ))}
            </Container>
        </Box>
    );
}

export default AllPosts;

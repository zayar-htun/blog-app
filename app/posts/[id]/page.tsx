import React from "react";
import { getOnePost, getPostComment, Post, Comment } from "../../../apicall";
import {
    Box,
    Container,
    Typography,
    Card,
    Divider,
    CardContent,
    CardHeader,
    Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

interface PostPageProps {
    post: Post;
    comments: Comment[];
}

const PostPage: React.FC<PostPageProps> = ({ post, comments }) => {
    return (
        <Box>
            <Container>
                <Box sx={{ my: 2 }}>
                    <Link href={`/`}>
                        <ArrowBackIcon />
                    </Link>
                </Box>
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
                </Card>
                <Typography variant="h7">Comments . . .</Typography>
                {comments.map((comment) => (
                    <Card key={comment.id} sx={{ my: 2 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: "red" }} aria-label="comment">
                                    {comment.name[0].toUpperCase()}
                                </Avatar>
                            }
                            title={comment.name}
                            subheader={comment.email}
                        />
                        <Divider sx={{ my: 1 }} />
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ p: 2 }}
                                color="text.primary"
                            >
                                {comment.body}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Container>
        </Box>
    );
};

export default async function Page({ params }: { params: { id: string } }) {
    const post = await getOnePost(Number(params.id));
    const comments = await getPostComment(Number(params.id));
    return <PostPage post={post} comments={comments} />;
}

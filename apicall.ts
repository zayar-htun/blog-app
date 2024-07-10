export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export async function getAllPost(): Promise<Post[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!res.ok) throw new Error("Failed to fetch posts");

    const posts: Post[] = await res.json();
    return posts;
}

export async function getOnePost(id: number): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch post");

    const post: Post = await res.json();
    return post;
}

export async function getPostComment(id: number): Promise<Comment[]> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    if (!res.ok) throw new Error("Failed to fetch comments");

    const comments: Comment[] = await res.json();
    return comments;
}

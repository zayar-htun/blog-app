import { getAllPost, getOnePost, getPostComment, Post, Comment } from '../apicall';

global.fetch = jest.fn();

const mockPosts: Post[] = [
  { id: 1, title: 'Post 1', body: 'Body 1' },
  { id: 2, title: 'Post 2', body: 'Body 2' },
];

const mockPost: Post = { id: 1, title: 'Post 1', body: 'Body 1' };

const mockComments: Comment[] = [
  { postId: 1, id: 1, name: 'Commenter 1', email: 'commenter1@example.com', body: 'Comment 1' },
];

describe('apicall functions', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test('getAllPost fetches posts', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPosts,
    });

    const posts = await getAllPost();
    expect(posts).toEqual(mockPosts);
  });

  test('getOnePost fetches a single post', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPost,
    });

    const post = await getOnePost(1);
    expect(post).toEqual(mockPost);
  });

  test('getPostComment fetches comments for a post', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockComments,
    });

    const comments = await getPostComment(1);
    expect(comments).toEqual(mockComments);
  });
});

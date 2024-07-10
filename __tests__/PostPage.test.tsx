import React from 'react';
import { render, screen } from '@testing-library/react';
import PostPage from '../app/posts/[id]/page';
import { Post, Comment } from '../apicall';

const mockPost: Post = {
  id: 1,
  title: 'Test Post',
  body: 'This is a test post.',
};

const mockComments: Comment[] = [
  {
    postId: 1,
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    body: 'This is a test comment.',
  },
];

test('renders post details correctly', () => {
  render(<PostPage post={mockPost} comments={mockComments} />);
  
  const titleElement = screen.getByText(/Test Post/i);
  expect(titleElement).toBeInTheDocument();

  const bodyElement = screen.getByText(/This is a test post./i);
  expect(bodyElement).toBeInTheDocument();
});

test('renders comments correctly', () => {
  render(<PostPage post={mockPost} comments={mockComments} />);

  const commentBody = screen.getByText(/This is a test comment./i);
  expect(commentBody).toBeInTheDocument();

  const commentAuthor = screen.getByText(/John Doe/i);
  expect(commentAuthor).toBeInTheDocument();

  const commentEmail = screen.getByText(/john@example.com/i);
  expect(commentEmail).toBeInTheDocument();
});

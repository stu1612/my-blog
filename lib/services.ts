import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query Posts {
    posts {
      createdAt
      id
      title
      slug
      excerpt
      featured
      image {
        url
      }
      categories {
        name
      }
      author {
        id
        name
        role
        availability
        profileImage {
          id
          url
        }
      }
    }
  }
`;

export const GET_BLOG_DETAIL = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      createdAt
      image {
        url
      }
      content {
        raw
      }
    }
  }
`;

export const GET_AUTHOR = gql`
  query GetAuthors {
    authors {
      availability
      bio
      secondBio
      aboutBio
      id
      name
      role
      updatedAt
      displayImage {
        id
        url
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      createdAt
      comment
    }
  }
`;

export const MUTATION = gql`
  mutation CreateComment($name: String!, $comment: String!, $slug: String!) {
    createComment(
      data: {
        name: $name
        comment: $comment
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export const submitComment = async (obj: PostComment) => {
  try {
    const result = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    return result.json();
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

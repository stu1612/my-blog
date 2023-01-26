// npm
import { GraphQLClient } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";

// files
import { MUTATION } from "../../lib/services";

declare var process: {
  env: {
    NEXT_PUBLIC_GRAPHCMS_URL: string;
    GRAPHCMS_TOKEN: string;
  };
};

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const variables: {
    name: string;
    comment: string;
    email: string;
    slug: string;
  } = req.body;

  const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const result = await client.request(MUTATION, variables);
  return res.status(200).send(result);
}

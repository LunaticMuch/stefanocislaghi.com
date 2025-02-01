/* eslint-disable  @typescript-eslint/no-explicit-any */
import { PageConfig } from "next/types";
import { graphql } from "@octokit/graphql";
import { contributionParser } from "@/helpers/contributions";

export const config: PageConfig = {
  runtime: "nodejs",
};

export const dynamic = "force-dynamic";

const token = process.env.GH_TOKEN;

export async function GET() {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  const {
    user: { contributionsCollection },
  } = await graphqlWithAuth<any>(`
    query { user(login: "LunaticMuch") {
        contributionsCollection {
            issueContributions(first: 10) {
                totalCount
                nodes {
                    issue {
                        resourcePath
                        publishedAt
                        repository {
                            name
                            owner {
                                login
                            }
                        }
                    }
                }
            }
            pullRequestContributions(first: 10) {
                totalCount
                nodes {
                    pullRequest {
                        resourcePath
                        publishedAt
                        repository {
                            name
                            owner {
                                login
                            }
                        }
                    }
                }
            }
        }
    }
  }
  `);

  const sortedContributions = contributionParser(contributionsCollection);


  return new Response(JSON.stringify(sortedContributions), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}

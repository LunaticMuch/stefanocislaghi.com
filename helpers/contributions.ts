// Description: This file contains the helper functions for contributions.
import { format } from "date-fns";

export interface IContribution  {
    date: Date;
    dateTime: Date;
    url: string
    repository: string
    owner: string
    type: 'issue' | 'pr'
}

export function contributionParser(contributions): IContribution[] {
    const {issueContributions, pullRequestContributions} = contributions;
    const issues: [IContribution] = issueContributions.nodes.map(({issue}) => ({
        date: format(issue.publishedAt, 'dd-MMM-yyyy'),
        dateTime: new Date(issue.publishedAt),
        url: `https://github.com${issue.resourcePath}`,
        repository: issue.repository.name,
        owner: issue.repository.owner.login,
        type: 'issue'
    }));
    const prs: [IContribution] = pullRequestContributions.nodes.map(({pullRequest}) => ({
        date: format(pullRequest.publishedAt, 'dd-MMM-yyyy'),
        dateTime: new Date(pullRequest.publishedAt),
        url: `https://github.com${pullRequest.resourcePath}`,
        repository: pullRequest.repository.name,
        owner: pullRequest.repository.owner.login,
        type: 'pr'
    }));

    const allContributions = [...issues, ...prs];
    allContributions.sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());;

    return allContributions.slice(0, 7);
    
}
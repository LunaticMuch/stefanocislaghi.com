import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Runs on every page
export function middleware (request: NextRequest) {
  if (request.nextUrl.pathname === '/.well-known/webfinger') {

    const mastodon = {
        "subject":"acct:stefano@discuss.systems",
        "aliases":
        [
            "https://discuss.systems/@stefano",
            "https://discuss.systems/users/stefano"
        ],
        "links":
        [
            {
                "rel":"http://webfinger.net/rel/profile-page",
                "type":"text/html",
                "href":"https://discuss.systems/@stefano"
            },
            {
                "rel":"self",
                "type":"application/activity+json",
                "href":"https://discuss.systems/users/stefano"
            },
            {
                "rel":"http://ostatus.org/schema/1.0/subscribe",
                "template":"https://hachyderm.io/authorize_interaction?uri={uri}"
            }
        ]
    }

    const response = NextResponse.json(mastodon)
    return response
  }
}
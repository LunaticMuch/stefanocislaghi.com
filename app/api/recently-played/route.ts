export const runtime = process.env.NODE_ENV === 'development' ? 'nodejs' : 'edge'
export const dynamic = 'force-dynamic'

import { SignJWT, importPKCS8 } from "jose";

const keyID = process.env.APPLE_MUSIC_KEYID;
const teamID = process.env.APPLE_MUSIC_TEAMID;
const secret = process.env.APPLE_MUSIC_PK?.replace(/\\n/g, "\n").toString()
const musicToken = process.env.APPLE_MUSIC_USERJWT;

const APPLE_MUSIC_ENDPOINT = `https://api.music.apple.com/v1/me/recent/played/tracks?limit=1&offset=0`;

const getRecentlyPlayed = async () => {
    // Generate a signed userJWT for apple
    const exp = "2h";
    const alg = "ES256";
    const privateKey = await importPKCS8(secret || 'fake-secret', alg);

    const token = await new SignJWT({})
        .setProtectedHeader({ alg: "ES256", typ: "JWT", kid: keyID })
        .setExpirationTime(exp)
        .setIssuedAt()
        .setIssuer(teamID || 'no-team-it')
        .sign(privateKey);

    return fetch(APPLE_MUSIC_ENDPOINT, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Music-User-Token": musicToken || 'there-is-no-token',
        },
    });
};

export async function GET() {
    const response = await getRecentlyPlayed();

    if (response.status === 204 || response.status > 400) {
        return new Response(JSON.stringify({ isPlaying: false }), {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        });
    }

    const song = await response.json();

    if (song.item === null) {
        return new Response(JSON.stringify({ isPlaying: false }), {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        });
    }

    // TODO: can be flattened as it's always the element [0]

    const title = song.data[0].attributes.name;
    const artist = song.data[0].attributes.artistName;
    const album = song.data[0].attributes.albumName;
    const albumImageUrl = song.data[0].attributes.artwork.url;
    const songUrl = song.data[0].attributes.albumName.url;

    return new Response(
        JSON.stringify({
            album,
            albumImageUrl,
            artist,
            songUrl,
            title,
        }),
        {
            status: 200,
            headers: {
                "content-type": "application/json",
                "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
            },
        }
    );
}
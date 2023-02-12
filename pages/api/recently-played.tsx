import { type NextRequest } from "next/server";
import { getRecentlyPlayed } from "lib/appleMusic";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
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

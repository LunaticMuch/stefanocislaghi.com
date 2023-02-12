import { SignJWT, importPKCS8 } from "jose";

const keyID = process.env.APPLE_MUSIC_KEYID;
const teamID = process.env.APPLE_MUSIC_TEAMID;
const secret = process.env.APPLE_MUSIC_PK.replace(/\\n/g, "\n").toString();
const musicToken = process.env.APPLE_MUSIC_USERJWT;

const APPLE_MUSIC_ENDPOINT = `https://api.music.apple.com/v1/me/recent/played/tracks?limit=1&offset=0`;

export const getRecentlyPlayed = async () => {
  // Generate a signed userJWT for apple
  const exp = "2h";
  const alg = "ES256";
  const privateKey = await importPKCS8(secret, alg);

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "ES256", typ: "JWT", kid: keyID })
    .setExpirationTime(exp)
    .setIssuedAt()
    .setIssuer(teamID)
    .sign(privateKey);

  return fetch(APPLE_MUSIC_ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Music-User-Token": musicToken,
    },
  });
};

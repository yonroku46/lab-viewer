import { createState } from "@/common/utils/StringUtils";

const appUri = `${process.env.NEXT_PUBLIC_ADDRESS}${process.env.NEXT_PUBLIC_VIEW_PORT ? ':' + process.env.NEXT_PUBLIC_VIEW_PORT : ''}${process.env.NEXT_PUBLIC_OAUTH2_ROOT}`;

// LINEソーシャルログイン
export function lineLogin() {
  const authUrl = "https://access.line.me/oauth2/v2.1/authorize";
  const clientId = `${process.env.NEXT_PUBLIC_LINE_ID}`;
  const redirectUri = `${appUri}/line`;
  const state = createState(8);
  const url = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&state=${state}&scope=openid%20profile%20email`;
  return url;
}

// Googleソーシャルログイン
export function googleLogin() {
  const authUrl = "https://accounts.google.com/o/oauth2/v2/auth"
  const clientId = `${process.env.NEXT_PUBLIC_GOOGLE_ID}`;
  const redirectUri = `${appUri}/google`;
  const url = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile%20email`;
  return url;
}
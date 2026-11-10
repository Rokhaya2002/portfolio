/** Public project origin also serves CDN images when the app runs outside Lovable. */
const assetOrigin = "https://id-preview--4ded3b83-ef75-45da-9cf1-3bf8c19cb2cd.lovable.app";

export function assetUrl(asset: { url: string }): string {
  return new URL(asset.url, assetOrigin).href;
}
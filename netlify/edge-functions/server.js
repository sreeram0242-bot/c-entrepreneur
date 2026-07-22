// This edge function delegates to the Nitro-built Cloudflare-compatible server.
// Netlify Edge Functions support the same Request/Response Web API as Cloudflare Workers.
export { default } from "../../.output/server/index.mjs";

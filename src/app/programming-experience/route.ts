const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <link
    rel="canonical"
    href="https://2025-programming-experience.akabanedai.workers.dev"
  />
  <meta
    http-equiv="Refresh"
    content="0; URL=https://2025-programming-experience.akabanedai.workers.dev"
  />
</head>
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}

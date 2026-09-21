const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/robots.txt", (req, res) => {
  res.type("text/plain").send(
`User-agent: *
Allow: /

Sitemap: https://powerinthenumbers.ai/sitemap.xml`
  );
});

app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml").send(
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://powerinthenumbers.ai/</loc>
  </url>
</urlset>`
  );
});

app.get("/", (req, res) => {
  res.send("Power In The Numbers");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

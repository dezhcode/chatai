// ورودی Passenger (cPanel ← Setup Node.js App): برنامه Next.js را بعد از `npm run build` بالا می آورد.
// Passenger خودش listen را روی سوکت خودش می گذارد؛ PORT فقط برای اجرای دستی است.
const { createServer } = require('http');
const next = require('next');

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(process.env.PORT || 3000);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

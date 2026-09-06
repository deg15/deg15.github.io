import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

// Local preview of the exported files, including the same 404 document as Pages.
const root = resolve('out');
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};
await stat(resolve(root, 'index.html'));
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method || '')) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url || '/', 'http://localhost').pathname,
    );
  } catch {
    response.writeHead(400).end();
    return;
  }
  let path = resolve(root, '.' + pathname);
  if (path !== root && !path.startsWith(root + sep)) {
    response.writeHead(403).end();
    return;
  }
  try {
    if ((await stat(path)).isDirectory()) {
      if (!pathname.endsWith('/')) {
        response.writeHead(301, { Location: pathname + '/' }).end();
        return;
      }
      path = resolve(path, 'index.html');
    }
    const body = await readFile(path);
    response.writeHead(200, {
      'Content-Type': types[extname(path)] || 'application/octet-stream',
      'Content-Length': body.length,
    });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    const body = await readFile(resolve(root, '404.html'));
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(request.method === 'HEAD' ? undefined : body);
  }
});
server.listen(port, '0.0.0.0', () =>
  process.stdout.write('Static preview: http://localhost:' + port + '\n'),
);

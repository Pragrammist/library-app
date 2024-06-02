/** @type {import('next').NextConfig} */
import { createRequire } from "module";
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const path = require('path')

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const nextConfig = {
  transpilePackages: ['@mui/x-charts'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};





export default nextConfig;

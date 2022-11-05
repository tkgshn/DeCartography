/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

/**
 * @param {string} appEnv
 */
function loadEnv(appEnv = "local") {
  const env = {
    ...require(`./env/env.${appEnv}`),
    NEXT_PUBLIC_APP_ENV: appEnv,
  };

  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value;
  });
}

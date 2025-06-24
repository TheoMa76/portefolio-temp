import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SMTP_SERVER_USERNAME: process.env.SMTP_SERVER_USERNAME,
    SMTP_SERVER_PASSWORD: process.env.SMTP_SERVER_PASSWORD,
    SITE_MAIL_RECIEVER: process.env.SITE_MAIL_RECIEVER,
    SMTP_SERVER_HOST: process.env.SMTP_SERVER_HOST,
    SITE_URL: process.env.SITE_URL,
  },
};

export default nextConfig;

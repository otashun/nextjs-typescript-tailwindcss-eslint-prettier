# Use only in development
FROM node:15.12.0-buster
WORKDIR /app
# See https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000

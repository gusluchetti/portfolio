FROM node:20.15-alpine as build
WORKDIR /web
RUN corepack enable
RUN pnpm i -P
RUN pnpm build

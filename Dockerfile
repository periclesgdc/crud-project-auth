FROM node:22-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "pnpm-lock.json*", "./"]

RUN npm install -g @nestjs/cli
RUN corepack enable
RUN pnpm i --production

COPY . .

RUN pnpm run build

EXPOSE 3000

RUN chown -R node /usr/src/app

USER node

CMD ["pnpm", "run", "start:prod"]

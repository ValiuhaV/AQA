FROM node:24-bullseye

WORKDIR /tests

COPY package*.json ./
RUN npm ci

RUN npx playwright install --with-deps chromium

COPY . .
ENV CI=true
CMD ["npx", "playwright", "test"]
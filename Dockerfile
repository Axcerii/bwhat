FROM node:22

WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY prisma ./prisma/

RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["node", "build"]
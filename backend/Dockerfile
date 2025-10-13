FROM node:22-alpine

WORKDIR /app

# Copy package.json first (for caching layers)
COPY package.json ./

RUN npm install

# Copy rest of backend files
COPY . .

EXPOSE 5000

CMD ["npm", "start"]


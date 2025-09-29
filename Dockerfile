# Use Node 22 Alpine as base
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json first (but we don’t have it yet, will come after init)
COPY package*.json ./

# Install dependencies (will run after init)
RUN npm install || true 

# Copy rest of project
COPY . .

# Expose Vite’s default port
EXPOSE 5173

# Run dev server
CMD ["npm", "run", "dev"]




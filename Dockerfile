# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.62.1-jammy

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install exact dependencies
RUN npm ci

# Copy project files
COPY . .

# Run Playwright tests
CMD ["npx", "playwright", "test"]
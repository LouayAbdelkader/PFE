# Stage 1: Build the React app
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install the dependencies listed in package.json
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built app from the build stage to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx is listening on
EXPOSE 80

# Start Nginx to serve the built app
CMD ["nginx", "-g", "daemon off;"]

# Create image based on the official Node 6 image from the dockerhub
FROM node:12.13-alpine

# Create a directory where our app will be placed
RUN mkdir -p /node-server

# Change directory so that our commands run inside this new directory
WORKDIR /node-server

# Copy dependency definitions
COPY package.json /node-server

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /node-server

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]

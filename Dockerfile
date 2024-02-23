# Use an official Node runtime as a base image
FROM node:18.17.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's source code from the current directory to the working directory in the container
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 5001

# Define the command to run the app
CMD ["npm", "start"]
FROM node:16.3.0-alpine

#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /app

#Copy new files or directories into the filesystem of the container
COPY package*.json /app/

#Execute commands in a new layer on top of the current image and commit the results
RUN npm install

# Running the app
CMD "npm" "run" "dev"

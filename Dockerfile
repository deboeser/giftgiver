FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Make sure to not run on root user
RUN useradd -ms /bin/bash admin

# Bundle app source
COPY --chown=admin:admin . .

# Switch to user admin
USER admin

EXPOSE 3000
CMD [ "npm", "start" ]
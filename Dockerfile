FROM node:slim

LABEL "com.github.actions.name"="mheap-debug"
LABEL "com.github.actions.description"="Outputs GITHUB_ environment variables and the event payload"
LABEL "com.github.actions.icon"="eye"
LABEL "com.github.actions.color"="red"

COPY package*.json ./
RUN npm ci
COPY . .
ENTRYPOINT ["node", "/index.js"]

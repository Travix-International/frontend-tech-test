FROM node:9
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN cd build
EXPOSE 5000
ENV NODE_ENV "production"
CMD ["node", "server"]
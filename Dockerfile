FROM node:9
WORKDIR /usr/src/app
ENV NODE_ENV "production"
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN cd build
EXPOSE 5000
CMD ["node", "server"]
FROM node:9
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
ENV NODE_ENV "production"
RUN yarn
COPY . .
RUN yarn build
RUN cd build
EXPOSE 5000
CMD ["node", "server"]
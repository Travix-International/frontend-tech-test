FROM node:9
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN cd build
EXPOSE 5000
RUN yarn global add serve
CMD ["serve", "-s", "build"]
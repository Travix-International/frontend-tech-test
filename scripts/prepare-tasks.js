#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const f = require("faker");

function getTask(id) {
  return {
    id,
    title: f.lorem.sentence(),
    description: f.lorem.paragraph(),
  };
}

function prepare() {
  const args = process.argv.slice(2);
  const [mapFilePath] = args;

  const tasks = Array.from({ length: 30 }, (_, i) => getTask(i));

  fs.writeFileSync(mapFilePath, JSON.stringify({ tasks }));
  console.log("🚀 tasks file is ready");
}

prepare();

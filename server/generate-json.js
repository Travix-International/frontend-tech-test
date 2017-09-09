/* eslint-disable no-multi-str */
const fs = require('fs');
const path = require('path');
const { jsonFile } = require('./config');
const dummyjson = require('dummy-json');

if (!fs.existsSync(path.resolve(__dirname, jsonFile))) {

  const myPartials = {
    task: '{\
      "id": {{@index}},\
      "title": "{{lorem 5}}",\
      "description": "{{lorem}}",\
      "completed": {{boolean}}\
    }'
  };

  const template = '{\
      "tasks": [\
        {{#repeat 1000}}\
          {{> task}}\
        {{/repeat}}\
      ]\
    }';

  const result = dummyjson.parse(template, {partials: myPartials});
  fs.writeFile(path.resolve(__dirname, jsonFile), result, (err) => {
    if (!!err) console.log(err);
    else console.log(`generate ${jsonFile} successfully`);
  });

}

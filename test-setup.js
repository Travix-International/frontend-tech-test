const MockDate = require('mockdate');

MockDate.set(new Date('7/22/2019'));

global.fetch = require('jest-fetch-mock');
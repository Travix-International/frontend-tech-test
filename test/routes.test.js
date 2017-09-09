const request = require('supertest');
const express = require('express');

const app = require("../server").app;

describe("Test fetching tasks list", () => {
    test('It should return tasks list wrapped in object with property tasks and status code 200', () => {
        return request(app).get("/tasks").then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty("tasks", expect.any(Array))
        })
    });
});

describe('Test fetching a task', () => {
    test('It should return task with given id if found wrapped in object with property task and status code 200', () => {
        const id = 1;
        return request(app).get("/task/"+id).then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty("task", expect.any(Object))
        });
    });

    test('It should return 404 status code if task not found with given id', () => {
        const id = 983742; //assuming that task with given id is not exist
        return request(app).get("/task/"+id).then(response => {
            expect(response.statusCode).toBe(404);
        });
    });

    test('It should return 400 status code if id param is not number', () => {
        const id = "NaN";
        return request(app).get("/task/"+id).then(response => {
            expect(response.statusCode).toBe(400);
        });
    });
});

describe("Test updating task", () => {
    test('It should return status code 200 with updated task object, if task found and updated with given id successfully', () => {
        const id = 1; //assuming that task with given id exist
        const afterUpdate = {
            id,
            title: "Updated title",
            description: "Updated description"
        };
        return request(app).put("/task/update/"+id).send(afterUpdate).then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty("task", afterUpdate);
        });
    });

    test('It should return status code 404 if task is not exist with given id', () => {
        const id = 29347123; //assuming that task with given id is not exist
        const afterUpdate = {
            id,
            title: "Updated title",
            description: "Updated description"
        };
        return request(app).put("/task/update/"+id).send(afterUpdate).then(response => {
            expect(response.statusCode).toBe(404);
        });
    });

    test('It should return status code 400 if task found with given id but both title and description is not sent to server', () => {
        const id = 1; //assuming that task with given id is not exist
        const afterUpdate = {
            id,
            title: undefined,
            description: undefined
        };
        return request(app).put("/task/update/"+id).send(afterUpdate).then(response => {
            expect(response.statusCode).toBe(400);
        });
    });
});

describe("Test creating task", () => {
    test('It should return status code 200 with created task object if either title or description sent to server', () => {
        const afterCreate = {
            title: "Updated title",
            description: "Updated description"
        };
        return request(app).post("/task/create").send(afterCreate).then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty("task", Object.assign({}, afterCreate, {id: response.body.task.id}));
        });
    });

    test('It should return status code 400 if both title and description is not sent to server', () => {
        const afterCreate = {
            title: undefined,
            description: undefined
        };
        return request(app).post("/task/create").send(afterCreate).then(response => {
            expect(response.statusCode).toBe(400);
        });
    });
});
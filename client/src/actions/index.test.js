/* Test actions */
import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchTodoList } from "./index";
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe("Fetch task-list Action", () => {
    let store;
    beforeEach(() => {
      store = mockStore({
        data: {}
      });
    });

    describe("FETCH_TODOLIST action creator", () => {
        it("dispatches GET_TODOLIST action and returns data on success", async () => {
            mockAxios.get.mockImplementationOnce(() =>
                Promise.resolve({
                    data: { tasks: [{ id: 0, title: "test title", description: "test desc" }] }
                })
            );

            await store.dispatch(fetchTodoList());
            const actions = store.getActions();
            expect.assertions(3);
            expect(mockAxios.get).toHaveBeenCalledTimes(1);
            expect(actions[0].type).toEqual("FETCH_TODOLIST");
            expect(actions[0].payload[0].title).toEqual("test title");

        });
    });
})
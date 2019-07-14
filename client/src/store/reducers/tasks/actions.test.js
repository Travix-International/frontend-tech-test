import * as actions from "./actions";

describe("Tasks reducer action creators", () => {
  it("should return a fetch list action", () => {
    const action = actions.fetchList();

    expect(action.type).toEqual("tasks/fetch-list");
    expect(action.meta).toBeDefined();
    expect(action.meta.method).toBeInstanceOf(Function);
  });

  it("should return a change action", () => {
    const task = { id: 0, title: "test task" };
    const action = actions.change(task);

    expect(action.type).toEqual("tasks/change");
    expect(action).toHaveProperty("payload", { id: 0, title: "test task" });
    expect(action.meta).toBeDefined();
    expect(action.meta.method).toBeInstanceOf(Function);
  });

  it("should return a remove action", () => {
    const task = { id: 0, title: "test task" };
    const action = actions.remove(task);

    expect(action.type).toEqual("tasks/remove");
    expect(action).toHaveProperty("payload", { id: 0, title: "test task" });
    expect(action.meta).toBeDefined();
    expect(action.meta.method).toBeInstanceOf(Function);
  });

  it("should return a create action", () => {
    const task = { title: "test task" };
    const action = actions.create(task);

    expect(action.type).toEqual("tasks/create");
    expect(action).toHaveProperty("payload", { title: "test task" });
    expect(action.meta).toBeDefined();
    expect(action.meta.method).toBeInstanceOf(Function);
  });

  it("should return a change filter action", () => {
    const action = actions.changeFilter("done");

    expect(action.type).toEqual("tasks/change-filter");
    expect(action).toHaveProperty("payload", "done");
    expect(action.meta).not.toBeDefined();
  });
});

import axios from "axios";

export default class TodosService {
  static async fetchAllTodos(limit = 5, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
  static async fetchTodoById(id) {
    console.log("Id", id);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );
    return response;
  }
}

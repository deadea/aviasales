class ApiService {
  _apiBase = 'https://aviasales-test-api.kata.academy/';

  async getSearchId() {
    const res = await fetch(`${this._apiBase}search`);
    const result = await res.json();
    return result;
  }
  async getTickets(id) {
    const res = await fetch(`${this._apiBase}tickets?searchId=${id}`);
    return res;
  }
}

const apiService = new ApiService();
export default apiService;

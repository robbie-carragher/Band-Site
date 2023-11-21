

class BandSiteApi {
  constructor(apikey) {
    this.apiKey = apikey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async getRequest(endpoint) {
    const url = `${this.baseUrl}${endpoint}?api_key=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }

  async postComment(comment) {
    const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
    await axios.post(url, comment);
  }

  async likeComment(commentId) {
    const url = `${this.baseUrl}comments/${commentId}/like?api_key=${this.apiKey}`;
    const response = await axios.put(url);
    return response.data;
  }

  getComments() {
    return this.getRequest("comments");
  }

  async getShows() {
    const url = `https://project-1-api.herokuapp.com/showdates?api_key=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }

}
class BandSiteApi {
    constructor(apikey) {
      this.apiKey = "apikey";
      this.baseUrl = "https://project-1-api.herokuapp.com/";
    }
  
    // // get all jokes from api
    async getComments() {
      const response = await axios.get(
        "https://project-1-api.herokuapp.com/comments?api_key=e3c51b65-ac15-4f73-8918-5b420bcb4b1"
      );
      console.log("response", response.data);
      return response.data;
    }
  
    async postComment(comment) {
      console.log("comment", comment);
      const response = await axios.post(
        "https://project-1-api.herokuapp.com/comments?api_key=e3c51b65-ac15-4f73-8918-5b420bcb4b1",
        comment
      );
      console.log(response);
    }

    async getShows() {
      console.log("getting shows")
      const response = await axios.get(
        "https://project-1-api.herokuapp.com/showdates?api_key=e3c51b65-ac15-4f73-8918-5b420bcb4b1"
      );
      
      console.log("response", response.data);
      return response.data;
    }

  }


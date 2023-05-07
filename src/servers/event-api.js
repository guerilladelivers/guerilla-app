import axios from "axios";

export default class EventApi {
  constructor() {
    this.baseUrl = process.env.REACT_APP_EVENTBRITE_API_URL;
  }

  async getMyEvents(status = "live") {
    const url = `${this.baseUrl}/organizations/${process.env.REACT_APP_ORG_ID}/events/?status=${status}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });

    return response.data.events ?? [];
  }
}

import axios from "axios";

export default class EventApi {
  constructor() {
    this.baseUrl = "https://www.eventbriteapi.com/v3";
  }

  async getMyEvents(status = "live") {
    const url = `${this.baseUrl}/organizations/1538040099613/events/?status=${status}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer XWWD4HUZ7NTFP3SIE2GE`,
      },
    });

    return response.data.events ?? [];
  }
}

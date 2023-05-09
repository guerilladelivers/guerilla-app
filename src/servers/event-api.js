import axios from "axios";

export default class EventApi {
  constructor() {
    this.baseUrl = "https://www.eventbriteapi.com/v3";
    this.token = "XWWD4HUZ7NTFP3SIE2GE";
    this.orgId = "1538040099613";
  }

  async getMyEvents(status) {
    const url = `${this.baseUrl}/organizations/${this.orgId}/events/?status=${status}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return response.data.events ?? [];
  }

  async copyEvent(sourceId) {
    const url = `${this.baseUrl}/events/${sourceId}/copy/`;

    const response = await axios.post(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return response.data ?? {};
  }

  async updateEvent(event) {
    const url = `${this.baseUrl}/events/${event.id}`;

    const response = await axios.post(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return response.data ?? {};
  }
}

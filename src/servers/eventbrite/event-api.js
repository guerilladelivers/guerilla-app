import axios from "axios";
import config from "../config.json";

export default class EventApi {
  constructor(orgId) {
    this.orgId = orgId;
  }

  async getMyEvents(status) {
    const url = `${config.eventBrite.baseUrl}/organizations/${this.orgId}/events/?status=${status}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${config.eventBrite.token}`,
      },
    });

    return response.data.events ?? [];
  }

  async copyEvent(sourceId) {
    const url = `${config.eventBrite.baseUrl}/events/${sourceId}/copy/`;

    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${config.eventBrite.token}`,
        },
      }
    );

    return response.data ?? {};
  }

  async updateEvent(eventId, event) {
    const url = `${config.eventBrite.baseUrl}/events/${eventId}/`;

    const response = await axios.post(
      url,
      {
        event,
      },
      {
        headers: {
          Authorization: `Bearer ${config.eventBrite.token}`,
        },
      }
    );

    return response.data ?? {};
  }

  async publishEvent(eventId) {
    const url = `${config.eventBrite.baseUrl}/events/${eventId}/publish/`;

    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${config.eventBrite.token}`,
        },
      }
    );

    return response.data ?? {};
  }
}

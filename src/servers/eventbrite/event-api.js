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

  async updateEvent(eventId, eventInfo) {
    const url = `${config.eventBrite.baseUrl}/events/${eventId}/`;

    const response = await axios.post(
      url,
      {
        event: {
          name: {
            html: eventInfo.name,
          },
          summary: eventInfo.description,
          start: {
            timezone: "America/Moncton",
            utc: `${eventInfo.startDate}T${eventInfo.startTime}:00Z`,
          },
          end: {
            timezone: "America/Moncton",
            utc: `${eventInfo.endDate}T${eventInfo.endTime}:00Z`,
          },
          currency: "CAD",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${config.eventBrite.token}`,
        },
      }
    );

    return response.data ?? {};
  }

  async createTicket(eventId) {
    const url = `${config.eventBrite.baseUrl}/events/${eventId}/ticket_classes/`;

    const response = await axios.post(
      url,
      {
        ticket_class: {
          name: "VIP",
          quantity_total: 10,
          cost: "CAD,1200",
        },
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

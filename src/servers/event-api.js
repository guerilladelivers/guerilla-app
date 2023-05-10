import axios from "axios";

export default class EventApi {
  constructor(orgId) {
    this.baseUrl = "https://www.eventbriteapi.com/v3";
    this.token = "XWWD4HUZ7NTFP3SIE2GE";
    this.orgId = orgId;
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

    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    return response.data ?? {};
  }

  async updateEvent(eventId, eventInfo) {
    const url = `${this.baseUrl}/events/${eventId}/`;

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
        },
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    return response.data ?? {};
  }
}

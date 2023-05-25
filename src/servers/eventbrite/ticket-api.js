import axios from "axios";
import * as config from "./config.json";

export default class EventApi {
  constructor(eventId) {
    this.eventId = eventId;
  }

  async createTicket(ticket) {
    const url = `${config.eventBrite.baseUrl}/events/${this.eventId}/ticket_classes/`;

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
}

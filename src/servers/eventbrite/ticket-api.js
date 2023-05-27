import axios from "axios";
import config from "../config.json";

export default class TicketApi {
  async createTicket(eventId, ticket) {
    const url = `${config.eventBrite.baseUrl}/events/${eventId}/ticket_classes/`;

    const response = await axios.post(
      url,
      {
        ticket_class: ticket,
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

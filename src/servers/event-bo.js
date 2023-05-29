import EventApi from "./eventbrite/event-api";
import TicketApi from "./eventbrite/ticket-api";

export const EventType = {
  Live: "live",
  Past: "past",
  Draft: "draft",
};

class EventBO {
  constructor(customer) {
    this.customer = customer;
    this.eventApi = new EventApi(customer.orgId);
    this.ticketApi = new TicketApi();
  }

  async getEvents(eventType) {
    return await this.eventApi.getMyEvents(eventType);
  }

  async copyEvent(eventInfo) {
    const startTime =
      new Date(`${eventInfo.eventDate} ${eventInfo.startTime}`)
        .toISOString()
        .slice(0, 19) + "Z";
    const endTime =
      new Date(`${eventInfo.eventDate} ${eventInfo.endTime}`)
        .toISOString()
        .slice(0, 19) + "Z";
    const event = {
      name: {
        html: eventInfo.name,
      },
      summary: `Special food will be delivered to Location: ${eventInfo.location} with surprise Price`,
      start: {
        timezone: "America/Moncton",
        utc: startTime,
      },
      end: {
        timezone: "America/Moncton",
        utc: endTime,
      },
      capacity: eventInfo.quantity,
      currency: "CAD",
    };

    let copiedEvent = await this.eventApi.copyEvent(
      this.customer.sourceEventId
    );

    let newEvent = await this.eventApi.updateEvent(copiedEvent.id, event);
    const ticket = {
      name: "VIP",
      quantity_total: eventInfo.quantity,
      cost: `CAD,${eventInfo.price * 100}`,
    };
    console.log(ticket);
    return await this.ticketApi.createTicket(newEvent.id, ticket);
  }

  async publishEvent(eventId) {
    return await this.eventApi.publishEvent(eventId);
  }
}

export default EventBO;

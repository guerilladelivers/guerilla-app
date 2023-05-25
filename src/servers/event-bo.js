import EventApi from "./eventbrite/event-api";

export const EventType = {
  Live: "live",
  Draft: "draft",
};

class EventBO {
  constructor(customer) {
    this.customer = customer;
    this.eventApi = new EventApi(customer.orgId);
  }

  async getLiveEvents() {
    return await this.eventApi.getMyEvents(EventType.Live);
  }

  async getDraftEvents() {
    return await this.eventApi.getMyEvents(EventType.Draft);
  }

  async copyEvent(eventInfo) {
    let copiedEvent = await this.eventApi.copyEvent(
      this.customer.sourceEventId
    );

    let newEvent = await this.eventApi.updateEvent(copiedEvent.id, eventInfo);
    return await this.eventApi.createTicket(newEvent.id);
  }

  async publishEvent(eventId) {
    return await this.eventApi.publishEvent(eventId);
  }
}

export default EventBO;

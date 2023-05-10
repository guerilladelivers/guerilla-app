import EventApi from "./event-api";

export const EventType = {
  Live: "live",
  Draft: "draft",
};

export const SOURCE_EVENT_ID = "633685228577";
export const ORG_ID = "1538040099613";

class EventBO {
  constructor() {
    this.eventApi = new EventApi(ORG_ID);
  }

  async getLiveEvents() {
    return await this.eventApi.getMyEvents(EventType.Live);
  }

  async getDraftEvents() {
    return await this.eventApi.getMyEvents(EventType.Draft);
  }

  async copyEvent(eventInfo) {
    let copiedEvent = await this.eventApi.copyEvent(SOURCE_EVENT_ID);
    console.log("copiedEvent", copiedEvent);
    let newEvent = await this.eventApi.updateEvent(copiedEvent.id, eventInfo);
    console.log("newEvent", newEvent);
    return await this.eventApi.createTicket(newEvent.id);
  }

  async publishEvent(eventId) {
    return await this.eventApi.publishEvent(eventId);
  }
}

export default EventBO;

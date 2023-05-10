import EventApi from "./event-api";

const EventType = {
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

  async copyEvents(eventInfo) {
    let copiedEvent = await this.eventApi.copyEvent(SOURCE_EVENT_ID);
    console.log("copiedEvent", copiedEvent);
    return await this.eventApi.updateEvent(copiedEvent.id, eventInfo);
  }
}

export default EventBO;

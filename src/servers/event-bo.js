import EventApi from "./event-api";

const EventType = {
  Live: "live",
  Draft: "draft",
};

class EventBO {
  constructor() {
    this.eventApi = new EventApi();
  }

  async getLiveEvents() {
    return await this.eventApi.getMyEvents(EventType.Live);
  }

  async getDraftEvents() {
    return await this.eventApi.getMyEvents(EventType.Draft);
  }

  async copyEvents(sourceId, eventInfo) {
    let copiedEvent = await this.eventApi.copyEvent(sourceId);

    await this.eventApi.updateEvent(eventInfo);
  }
}

export default EventBO;

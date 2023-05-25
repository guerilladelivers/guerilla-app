import config from "./config.json";
import EventBO from "./event-bo";

export const eventBO = new EventBO(config.customers.thaimanao);

import EventEmitter from "node:events";
import { logger } from "../utils/logger";

class AuditEventBus extends EventEmitter {
  private static instance: AuditEventBus;

  private constructor() {
    super();
    this.setMaxListeners(10);
  }

  static getInstance(): AuditEventBus {
    if (!AuditEventBus.instance) {
      AuditEventBus.instance = new AuditEventBus();
    }
    return AuditEventBus.instance;
  }

  emitEvent(topic: string, payload: any): void {
    try {
      logger.info("[AuditEventBus] emitEvent", topic, payload);
      this.emit(topic, payload);
    } catch (error) {
      logger.error("[AuditEventBus] Error emitting event", error);
    }
  }

  subscribe(topic: string, callback: any): void {
    logger.info("[AuditEventBus] subscribe to an event", topic, callback);
    this.on(topic, callback);
  }

  unsubscribe(topic: string, callback: any): void {
    logger.info("[AuditEventBus] unsubscribe to an event", topic, callback);
    this.removeListener(topic, callback);
  }
}

export default AuditEventBus.getInstance();

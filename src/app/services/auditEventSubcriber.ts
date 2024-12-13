import AuditEventBus from "./auditEventBus";
import { logger } from "../utils/logger";

class AuditSubscriber {
  private readonly callback: (eventData: any) => void;

  constructor() {
    this.callback = this.processEvent.bind(this);
  }

  /**Start subscribing to events*/
  start(): void {
    logger.info("Listening to AuditEventBus");
    AuditEventBus.subscribe("audit_event", this.callback);
  }

  /**Stop subscribing to events*/
  stop(): void {
    logger.info("Stop Listening to AuditEventBus");
    AuditEventBus.unsubscribe("audit_event", this.callback);
  }

  /**Process the event*/
  private processEvent(eventData: any): void {
    logger.info("Processing event:", eventData);

    // Add your event processing logic here
    // For example, saving to a database or further processing
  }
}

export default AuditSubscriber;

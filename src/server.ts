import express, { RequestHandler } from "express";
import routes from "./routes";
import AuditEventBus from "./app/services/auditEventBus";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const auditMiddleware: RequestHandler = (req, res, next) => {
  const eventPayload = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    timestamp: new Date(),
  };

  AuditEventBus.emitEvent("api_request", eventPayload);
  next();
};

app.use(auditMiddleware);

app.use("/api", routes);

export default app;

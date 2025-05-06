// src/mocks/server.js
import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api"; // This is the base for your fake API

      this.get("/sales/", () => [
        { timestamp: "2025-01-01", amount: 100 },
        { timestamp: "2025-01-02", amount: 200 },
        { timestamp: "2025-01-03", amount: 300 },
        { timestamp: "2025-01-04", amount: 400 },
        { timestamp: "2025-01-05", amount: 500 },
        { timestamp: "2025-01-06", amount: 600 },
        { timestamp: "2025-01-07", amount: 700 },
        { timestamp: "2025-01-08", amount: 800 },
        { timestamp: "2025-01-09", amount: 900 },
        { timestamp: "2025-01-10", amount: 1000 }
      ]);

      this.get("/subscriptions/", () => [
        { timestamp: "2025-01-01", amount: 10 },
        { timestamp: "2025-01-02", amount: 20 },
        { timestamp: "2025-01-03", amount: 30 },
        { timestamp: "2025-01-04", amount: 40 },
        { timestamp: "2025-01-05", amount: 50 },
        { timestamp: "2025-01-06", amount: 60 },
        { timestamp: "2025-01-07", amount: 70 },
        { timestamp: "2025-01-08", amount: 80 },
        { timestamp: "2025-01-09", amount: 90 },
        { timestamp: "2025-01-10", amount: 100 }
      ]);
    }
  });
}

import { createServer } from "miragejs";
import { sales, subscriptions } from "./data";

export function makeServer({ environment = "development" } = {}) {
  if (environment !== "development") return;

  createServer({
    routes() {
      this.namespace = "api";

      this.get("/sales", () => sales);
      this.get("/subscriptions", () => subscriptions);
    }
  });
}


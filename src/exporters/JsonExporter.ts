import { DataExporter } from "./DataExporter";
import { writeFileSync } from "fs";

export class JsonExporter extends DataExporter {
  protected render(): string {
    return JSON.stringify(this.data, null, 2);
  }

  protected save(): void {
    writeFileSync("users.json", this.result, "utf8");
  }
}

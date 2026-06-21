import { DataExporter } from "./DataExporter";
import { writeFileSync } from "fs";

export class CsvExporter extends DataExporter {
  protected render(): string {
    const header = "id,name,email,phone";
    const rows = this.data.map((user) =>
      [user.id, user.name, user.email, user.phone].map(String).map(this.escapeCsvValue).join(",")
    );

    return [header, ...rows].join("\n");
  }

  protected save(): void {
    writeFileSync("users.csv", this.result, "utf8");
  }

  private escapeCsvValue(value: string): string {
    if (!/[",\n]/.test(value)) {
      return value;
    }

    return `"${value.replace(/"/g, '""')}"`;
  }
}

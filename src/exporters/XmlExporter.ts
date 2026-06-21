import { DataExporter } from "./DataExporter";
import { writeFileSync } from "fs";

export class XmlExporter extends DataExporter {
  protected render(): string {
    const users = this.data
      .map((user) =>
        [
          "  <user>",
          `    <id>${user.id}</id>`,
          `    <name>${this.escapeXmlValue(user.name)}</name>`,
          `    <email>${this.escapeXmlValue(user.email)}</email>`,
          `    <phone>${this.escapeXmlValue(user.phone)}</phone>`,
          "  </user>",
        ].join("\n")
      )
      .join("\n");

    return ['<?xml version="1.0" encoding="UTF-8"?>', "<users>", users, "</users>"].join("\n");
  }

  protected afterRender(): void {
    this.result += `\n<!-- Експорт згенеровано: ${new Date().toISOString()} -->`;
  }

  protected save(): void {
    writeFileSync("users.xml", this.result, "utf8");
  }

  private escapeXmlValue(value: string): string {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }
}

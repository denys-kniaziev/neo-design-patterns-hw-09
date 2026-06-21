import { readFileSync } from "fs";
import { UserData } from "../data/UserData";

export class CsvIterator implements Iterable<UserData> {
  private readonly users: UserData[];

  public constructor(filePath: string) {
    const content = readFileSync(filePath, "utf8").trim();
    const [, ...rows] = content.split(/\r?\n/);

    this.users = rows.map((row) => {
      const [id, name, email, phone] = this.parseRow(row);

      return {
        id: Number(id),
        name,
        email,
        phone,
      };
    });
  }

  public *[Symbol.iterator](): IterableIterator<UserData> {
    yield* this.users;
  }

  private parseRow(row: string): string[] {
    const values: string[] = [];
    let value = "";
    let isQuoted = false;

    for (let index = 0; index < row.length; index++) {
      const character = row[index];
      const nextCharacter = row[index + 1];

      if (character === '"' && isQuoted && nextCharacter === '"') {
        value += '"';
        index++;
      } else if (character === '"') {
        isQuoted = !isQuoted;
      } else if (character === "," && !isQuoted) {
        values.push(value);
        value = "";
      } else {
        value += character;
      }
    }

    values.push(value);
    return values;
  }
}

import { readFileSync } from "fs";
import { UserData } from "../data/UserData";
import { XMLParser } from "fast-xml-parser";

interface ParsedXmlUsers {
  users: {
    user: Array<{
      id: string | number;
      name: string;
      email: string;
      phone: string;
    }>;
  };
}

export class XmlIterator implements Iterable<UserData> {
  private readonly users: UserData[];

  public constructor(filePath: string) {
    const content = readFileSync(filePath, "utf8");
    const parser = new XMLParser({ ignoreAttributes: true });
    const parsed = parser.parse(content) as ParsedXmlUsers;

    this.users = parsed.users.user.map((user) => ({
      id: Number(user.id),
      name: user.name,
      email: user.email,
      phone: user.phone,
    }));
  }

  public *[Symbol.iterator](): IterableIterator<UserData> {
    yield* this.users;
  }
}

import { readFileSync } from "fs";
import { UserData } from "../data/UserData";

export class JsonIterator implements Iterable<UserData> {
  private readonly users: UserData[];

  public constructor(filePath: string) {
    const content = readFileSync(filePath, "utf8");
    this.users = JSON.parse(content) as UserData[];
  }

  public *[Symbol.iterator](): IterableIterator<UserData> {
    yield* this.users;
  }
}

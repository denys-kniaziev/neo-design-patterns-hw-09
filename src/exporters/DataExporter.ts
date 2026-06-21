import { UserData } from "../data/UserData";
import fetch from "node-fetch";

export abstract class DataExporter {
  protected data: UserData[] = [];
  protected result: string = "";

  public async export(): Promise<void> {
    await this.load();
    this.transform();
    this.beforeRender();
    this.result = this.render();
    this.afterRender();
    this.save();
  }

  protected async load(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.data = users as UserData[];
  }

  protected transform(): void {
    this.data = this.data
      .map(({ id, name, email, phone }) => ({ id, name, email, phone }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  protected beforeRender(): void {}

  protected afterRender(): void {}

  protected abstract render(): string;
  protected abstract save(): void;
}

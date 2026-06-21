import { CsvIterator } from "./iterators/CsvIterator";
import { JsonIterator } from "./iterators/JsonIterator";
import { XmlIterator } from "./iterators/XmlIterator";

console.log("--- CSV ---");
for (const user of new CsvIterator("./users.csv")) {
  console.log(user);
}

console.log("--- JSON ---");
for (const user of new JsonIterator("./users.json")) {
  console.log(user);
}

console.log("--- XML ---");
for (const user of new XmlIterator("./users.xml")) {
  console.log(user);
}

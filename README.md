# Woolf University. Design Patterns Course. Homework – Template Method and Iterator Patterns

Practice behavioral design patterns in TypeScript.

## Topic

Build a user data export and iteration system using:

* Template Method
* Iterator
* Abstract classes
* Hook methods
* API data loading

## Main Logic

The app should demonstrate:

* Loading and transforming user data from an API
* Defining a fixed export workflow in a base class
* Exporting users to CSV, JSON, and XML
* Adding format-specific behavior through subclasses
* Reading exported files with separate iterators
* Parsing each format into `UserData` objects
* Iterating through users with `for...of`

## Run

Generate export files:

```bash
npx ts-node src/main.ts
```

Read exported files through iterators:

```bash
npx ts-node src/main-iterate.ts
```
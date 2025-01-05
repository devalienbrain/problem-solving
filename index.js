// 1. Array Filtering and Mapping
const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 30, gender: "female" },
  { name: "Mike", age: 20, gender: "male" },
  { name: "Anna", age: 22, gender: "female" },
];

const filterMales = (people) => {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
};

console.log(
  `Problem # 1 Array Filtering and Mapping Output: ${filterMales(people).join(
    ", "
  )}`
); // Output: John, Mike

// 2. Object Manipulation
const books = [
  { title: "Book A", author: "Author A", year: 1990 },
  { title: "Book B", author: "Author B", year: 2000 },
  { title: "Book C", author: "Author C", year: 2010 },
];

const getBookTitles = (books) => {
  return books.map((book) => book.title);
};

console.log(
  `Problem # 2 Object Manipulation Output: ${getBookTitles(books).join(", ")}`
); // Output: Book A, Book B, Book C

// 3. Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2019 },
];

const sortByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(
  `Problem # 3 Sorting Objects Output: ${JSON.stringify(
    sortByYear(cars),
    null,
    2
  )}`
); // Output: Cars sorted by year, nicely formatted

// 4. Find and Modify
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const modifyAge = (persons, name, newAge) => {
  const person = persons.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return persons;
};

console.log(
  `Problem # 4 Find and Modify Output: ${JSON.stringify(
    modifyAge(persons, "Bob", 40),
    null,
    2
  )}`
); // Output: Updated array

// 5. Array Reduction
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumOfEvens = (numbers) => {
  return numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};

console.log(`Problem # 5 Array Reduction Output: ${sumOfEvens(numbers)}`); // Output: 20

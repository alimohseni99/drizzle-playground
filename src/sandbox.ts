import { faker } from "@faker-js/faker";

function dog() {
  const dogs: string[] = [];
  const getAlotOfDogs = Math.ceil(Math.random() * 100);

  for (let i = 0; i < getAlotOfDogs; i++) {
    dogs.push(faker.animal.dog());
  }
  console.log(dogs);
}
dog();

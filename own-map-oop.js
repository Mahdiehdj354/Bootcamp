const dictionary = new Map();

dictionary.set("a", 2).set("b", 2).set("c", 3);

// console.log(dictionary.get());
console.log(
  dictionary.forEach((value, key) => {
    value++;
    dictionary.set(key, value);
  })
);
console.log(dictionary);

// console.log([...dictionary.keys()]);
// console.log([...dictionary.values()]);
// console.log([...dictionary.entries()]);

class SuperMap {
  #map = {};
  #size = 0;

  constructor() {}

  set(key, value) {
    this.#map[key] = value;
    this.#size++;

    return this;
  }

  get(key) {
    return this.#map[key];
  }

  delete(key) {
    delete this.#map[key];
    this.#size--;

    return this;
  }

  get size() {
    return this.#size;
  }

  has(key) {
    return this.#map.hasOwnProperty(key);
  }
  keys() {
    return Object.keys(this.#map);
  }
  values() {
    return Object.values(this.#map);
  }
  entries() {
    return Object.entries(this.#map);
  }
  clear() {
    this.#map = {};
    return this;
  }
  forEach(callback) {
    // const keys = this.keys();
    // keys.forEach((key) => {
    //   callback(this.#map[key], key);
    // });
    this.entries().forEach(([key, value]) => {
      callback(value, key);
    });
  }
}

const ownMap = new SuperMap();

ownMap.set("a", 1).set("b", 2).set("c", 3).set("d", 4).set("e", 5);
console.log(ownMap.size);
ownMap.delete("a").delete("b").delete("c");
console.log(ownMap.size);
console.log(ownMap.get("a"));
console.log(ownMap.get("b"));
console.log(ownMap.get("c"));
console.log(ownMap.get("d"));
console.log(ownMap.get("e"));

//
console.log(ownMap.has("f"));
console.log(ownMap.keys("f"));
console.log(ownMap.values("f"));
console.log(
  ownMap.forEach((value, key) => {
    ownMap.set(key, ++value);
  })
);
console.log(ownMap.entries());

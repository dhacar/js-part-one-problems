const person = { name: "Alice", age: 25, city: "Wonderland" };
        for (const key in person) {
            console.log(key + ": " + person[key]);
        }
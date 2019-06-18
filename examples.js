const data = new Map();

data.set("123", {value: "this is joke 1"});
data.set("321", {value: "this is another joke"});

console.log(
    JSON.stringify(
        Array.from(data.entries()),
        null,
        2
    )
);
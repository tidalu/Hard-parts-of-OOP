var user1 = {
    name: "Pl",
    score: 4,
    increment: function () {
        user1.score++;
    }
}


// another way

const user2 = {}

user2.name = "Kali"
user2.score = 4

user2.increment = () => {
    user2.score++
}


// better but not good, there should be another way 

function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    };
    return newUser;
};
const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
user1.increment()


// let's see another way 

function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function () { this.score++; },
    login: function () { console.log("You're loggedin"); }
};
const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
user1.increment();

// this  in arrow functions 

// this is lexically scoped in arrow functions , and it refers to the this's value  where and when  the arrow function is defined  
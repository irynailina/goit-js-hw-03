"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const updateUser = Object.keys(user);

for (let key of updateUser) {
  console.log(`${key} : ${user[key]}`);
}

//Non Singleton Object
// const appUser = {};

//singleton Object
const appUser = new Object()

appUser.id = "1242Abc"
appUser.name = "sammy"
appUser.isLoggedIn = false

console.log(appUser);


const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullName:{
            firstName: "mohan",
            lastName: "patel"

        }
    }

}
console.log(regularUser.fullname.userFullName.firstName);

//combine two Objects

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = Object.assign({},obj1,obj2, obj4)
//                  OR
const obj3 = {...obj1,...obj2,...obj4}

console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
]
 
users.email
console.log(appUser);

console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));

//True
console.log(appUser.hasOwnProperty('isLoggedIn'));




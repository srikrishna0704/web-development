
const users = [
    {
        name: "john",
        gender: "male",
        img: "john.png"
    },
    {
        name: "jane",
        gender: "female",
        img: "jane.png"
    }
];

let index = 0;

const toggleUser = () => {
    index = index === 0 ? 1 : 0;

    document.getElementById("card").innerHTML =
        `<img src="${users[index].img}" alt="User Image">
         <h2>${users[index].name}</h2>
         <p>${users[index].gender}</p>
         <button onclick="toggleUser()">Toggle User</button>
         <br><br>
         <button>Random User</button>`;
};


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

const randomUser = () => {
    fetch('https://randomuser.me/api/')
    .then(function(rawdata) {
        return rawdata.json();
    }).then(function(jsondata){
        const user=jsondata.results[0];
        document.getElementById("card").innerHTML =
            `<img src="${user.picture.large}" alt="User Image">
             <h2>${user.name.title} ${user.name.first} ${user.name.first} </h2>
             <p> ${user.gender}</p>
             <button onclick="toggleUser()">Toggle User</button>
             <br><br>
             <button onclick="randomUser()">Random User</button>`
        
    });
}
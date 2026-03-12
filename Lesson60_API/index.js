// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(users => users.json())
//     .then(user => console.log(user));

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(users => users.json())
//     .then(user => console.log(user));


// async function loadUsers() {
// try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();
//     console.log(users);
//     // users.forEach((user) => {
//     //     console.log(user.name)
//     // })
//     users.forEach((user) => {
//         console.log(user.email)
//     })
// } catch {
//     console.log(`Not found...  code: 404`)
// }
// }


// loadUsers();


// async function loadUsers() {
//     const list = document.getElementById(`userList`);
//     try {
//         const response = await
//     fetch(`https://jsonplaceholder.typicode.com/users`);
//         const users = await response.json();

//         users.forEach(user => {
//             const li = document.createElement(`li`);
//             li.textContent = user.name;
//             list.appendChild(li);
//         });
//     } catch {
//         list.textContent = "Ошибка загрузки данных";
//     }
// }

// loadUsers();

//////////////////////////////////////////////////////////////

// Dz

// async function loadUsers() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await res.json();
//         console.log(users)
//         users.forEach((user) => {
//             console.log(user.id)
//             console.log(user.name)
//             console.log(user.username)
//             console.log(user.email)
//             console.log(user.address.street)
//             console.log(user.address.suite)
//             console.log(user.address.city)
//             console.log(user.address.zipcode)
//             console.log(user.address.geo.lat)
//             console.log(user.address.geo.lng)
//             console.log(user.phone)
//             console.log(user.website)
//             console.log(user.company.name)
//             console.log(user.company.catchPhrase)
//             console.log(user.company.bs)
//             console.log('------------------------------')
//         })
//     } catch {
//         console.log(`Not found...`)
//     }
// }

// loadUsers();

const root = document.getElementById(`users`)

async function load() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    users.forEach((element) => {
        const card = document.createElement("div");
        card.className = `card`;

        const name = document.createElement('h2');
        name.className = `name`;
        name.textContent = element.name;
        
        const username = document.createElement('h2');
        username.className = `username`;
        username.textContent = element.username;

        const email = document.createElement('h2');
        email.className = `email`;
        email.textContent = element.email;

        const address = document.createElement('h2');
        address.className = `address`;
        address.textContent = element.address;   

        const phone = document.createElement('h2');
        phone.className = `phone`;
        phone.textContent = element.phone;
        
        
        card.appendChild(name);
        card.appendChild(username);
        card.appendChild(email);
        card.appendChild(address);
        card.appendChild(phone);
        root.appendChild(card);
    })
}

load();
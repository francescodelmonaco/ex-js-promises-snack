// snack 1
function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => resolve(data.title))
            .catch(error => reject(error))
    });

    return promessa
};

getPostTitle(22)
    .then(title => console.log(`Il titolo del post è: ${title}`))
    .catch(error => console.error(error))

// snack 2
function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random < 0.2) {
                reject(`Il dado si è incastrato... Rilancia!`);
            } else {
                const randomNum = Math.floor(Math.random() * 6) + 1;
                resolve(randomNum);
            }
        }, 3000);
    });
};

lanciaDado()
    .then(num => console.log(`Il numero è il ${num}`))
    .catch(err => console.error(err))
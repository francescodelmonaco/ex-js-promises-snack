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
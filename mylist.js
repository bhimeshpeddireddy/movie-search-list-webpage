let lists = [];

function createList() {
    const listName = document.getElementById('list-name').value;
    const isPublic = document.getElementById('list-public').checked;
    if (listName.trim() === '') {
        alert('Please enter a list name.');
        return;
    }

    const list = {
        name: listName,
        public: isPublic,
        movies: []
    };

    lists.push(list);
    displayLists();
    document.getElementById('list-name').value = '';
    document.getElementById('list-public').checked = false;
}

function displayLists() {
    const listsContainer = document.getElementById('lists-container');
    listsContainer.innerHTML = '';

    lists.forEach((list, index) => {
        const listElement = document.createElement('div');
        listElement.className = 'list';
        
        const title = document.createElement('h2');
        title.innerHTML = `
            ${list.name}
            <button class="remove-btn" onclick="removeList(${index})">Remove List</button>
        `;
        listElement.appendChild(title);
        
        const status = document.createElement('p');
        status.textContent = list.public ? 'Public' : 'Private';
        listElement.appendChild(status);

        const addMovieForm = document.createElement('div');
        addMovieForm.innerHTML = `
            <input type="text" placeholder="Add a movie" id="movie-input-${index}">
            <button onclick="addMovie(${index})">Add</button>
        `;
        listElement.appendChild(addMovieForm);

        const moviesContainer = document.createElement('ul');
        list.movies.forEach((movie, movieIndex) => {
            const movieElement = document.createElement('li');
            movieElement.innerHTML = `
                ${movie}
                <button class="remove-btn" onclick="removeMovie(${index}, ${movieIndex})">Remove</button>
            `;
            moviesContainer.appendChild(movieElement);
        });
        listElement.appendChild(moviesContainer);

        listsContainer.appendChild(listElement);
    });
}

function addMovie(listIndex) {
    const movieInput = document.getElementById(`movie-input-${listIndex}`);
    const movieName = movieInput.value;
    if (movieName.trim() === '') {
        alert('Please enter a movie name.');
        return;
    }

    lists[listIndex].movies.push(movieName);
    displayLists();
}

function removeList(listIndex) {
    lists.splice(listIndex, 1);
    displayLists();
}

function removeMovie(listIndex, movieIndex) {
    lists[listIndex].movies.splice(movieIndex, 1);
    displayLists();
}

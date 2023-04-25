const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    console.log("SUBMITTED!")
    console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value; //note: query here is the name attr. of the input element
    /* 
    The next two lines of code is a refactored way of doing the code below, to make it easier to intake multiple http request parameters (headers, query paramaters, etc.)

    const searchTerm = form.elements.query.value;
    
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    */
    const config = { params {q:searchTerm}}; //query string object
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    console.log(res.data);
    console.log(res.data[0].show.image.medium);
    makeImages(res.data);
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for(let result of shows) {
        console.log(result);
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
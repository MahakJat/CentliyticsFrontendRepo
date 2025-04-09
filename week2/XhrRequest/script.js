const btn = document.querySelector('.btn');
const cardcontainer = document.querySelector('.cardcontainer');
btn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100');
    document.querySelector('.loading').style.display = 'block';
    // xhr.response this will give the response in form of string
    xhr.responseType = 'json'; // Automatically parse response as JSON 
    // const arr = JSON.parse(xhr.response);  
    let str = ''
    xhr.addEventListener('load', function() {
        const arr = xhr.response; // Now this is already parsed as JSON

        // console.log(arr);
         
        arr.map(function(elem){
            console.log(elem.author)
            str += ` <div class="card">
                <img src=${elem.download_url} alt="img loading..">
                <h1>${elem.author}</h1>
            </div>`
        })
        document.querySelector('.loading').style.display = 'none';
        cardcontainer.innerHTML = str
    });

    xhr.send(); 
});

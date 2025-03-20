import jsonData from './data.json' with {type:"json"}

// console.log(jsonData);
// jsonData.map(function(elem){
//     console.log(elem.practice_name)
// })

const threeLines = (str) => {
    let arr = str.split(' ');
    if (arr.length > 20) {
        return arr.slice(0, 20).join(' ') + '...';
    }
    return str;
};



let section_2 = document.querySelector('.section-2');
let str = '';



jsonData.map(function(elem){
    str += `<div class="card">
                 <div class="heading-para">
                <h3>${elem.service_name}</h3>
                <p>${threeLines(elem.service_description)}</p>
                 </div>
                <div class="btn-and-price">
                    <button>cloud operation</button>
                    <div class="price">
                         <h6>Starting from</h6>
                         <h3>&#8377; ${elem.price}</h3>      
                    </div>
                </div>
            </div>`
})


// console.log(str);

section_2.innerHTML = str;
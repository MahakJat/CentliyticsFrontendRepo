import jsonData from './data.json' with {type:"json"}

// console.log(jsonData);
// jsonData.map(function(elem){
//     console.log(elem.practice_name)
    // })

let cardSection = document.querySelector('.section-2-part-1-cards');
let section_2_part_1 = document.querySelector('.section-2-part-1');
let section_2_cards = document.querySelector('.section-2-part-1-cards');
let section_2_part_1_header = document.querySelector('.section-2-part-1-header');
let str = '';

jsonData.map(function(elem){
    str += `<div class="card">
                 <div class="heading-para">
                <h3>${elem.service_name}</h3>
                <p>${elem.service_description}</p>
              
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

cardSection.innerHTML = str;
let cards = document.querySelectorAll('.card');

cards.forEach(function(elem){
    let isSelected = false;
    elem.addEventListener("click",function(){
        if(!isSelected){
             elem.style.border = `1px solid #ffb938`
             section_2_part_1.style.width = '30%'
             section_2_cards.style.flexDirection = 'column'
             section_2_part_1_header.style.flexDirection ='column'
            cards.forEach(function(card){
                card.style.width = '100%'
            })
             
        }else{
            elem.style.border = `1px solid #d4d4d4`
            section_2_part_1.style.width = '100%'
            section_2_cards.style.flexDirection = 'row'
             section_2_part_1_header.style.flexDirection ='row'
            cards.forEach(function(card){
                card.style.width = '32.5%'
            })
        }
        isSelected = !isSelected
    })
})



// cards.forEach(function(elem){
//     let isSelected = false;
//     elem.addEventListener('click',function(){
//          if(!isSelected){
//             elem.style.border = `1px solid #ffb938`
//             section_2_part_1.style.width = '50%'
//             section_2_part_1.style.flexDirection = 'column' 
//             cards.forEach(function(card){
//                 card.style.width = '100%'
//             })
//          }else{
//              elem.style.border = `1px solid #d4d4d4`
//                 section_2_part_1.style.width = '100%'
//                 section_2_part_1.style.flexDirection = 'row' 
//                 cards.forEach(function(card){
//                     card.style.width = '32.5%'
//                 })
//          }
//          isSelected = !isSelected;
//     })
// })



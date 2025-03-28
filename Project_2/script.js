import jsonData from './data.json' with {type:"json"}

// console.log(jsonData);
// jsonData.map(function(elem){
//     console.log(elem.practice_name)
    // })

let cardSection = document.querySelector('.section-2-part-1-cards');
let section_2_part_1 = document.querySelector('.section-2-part-1');
let section_2_cards = document.querySelector('.section-2-part-1-cards');
let section_2_part_1_header = document.querySelector('.section-2-part-1-header');
let section_2_part_2 = document.querySelector('.section-2-part-2');

const section_2_part_1_cardsAdded = ()=>{
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
} 
const cardClicked = ()=>{
    let Part_1_cards = document.querySelectorAll('.section-2-part-1-cards .card');
    Part_1_cards.forEach(function(elem){
    let isSelected = false;
    elem.addEventListener("click",function(){
        if(!isSelected){   
             elem.style.border = `1px solid #ffb938`   
             section_2_part_1.style.width = '30%'
             section_2_cards.style.flexDirection = 'column'
             section_2_part_1_header.style.flexDirection ='column'
             
            //  for independent scrolling wala part
             section_2_part_1.style.overflowY='auto'
             section_2_part_1.style.height = '100vh'
         
    
             
        }else{
            elem.style.border = `1px solid #d4d4d4`
            section_2_part_1.style.width = '100%'
            section_2_cards.style.flexDirection = 'row'
             section_2_part_1_header.style.flexDirection ='row'

            //  for independent scrolling wala part
               section_2_part_1.style.overflowY='hidden'
               section_2_part_1.style.height = 'auto'

             Part_1_cards.forEach(function(card){
                card.style.width = '32.5%'
            })
        }
        isSelected = !isSelected
    })
})

}
const section_2_part_2_cardsAdded = ()=>{
    let str2 = ''
    let cardContainerPart2 = document.querySelector('.section-2-part-2 .card-container')
    jsonData.map(function(elem){
     str2+=`<div class="card">
                           <div class="left-side">
                               <h2>${elem.service_name}</h2>
                               <p>${elem.service_description}</p>
                               <div class="reviews">
                                  <img src="./images/rocket.svg" alt="">
                                  <h4>100+ Successful Deliveries</h4>
                                  <h4 id="review">12 Reviews</h4>
                                  <img src="./images/external-link 1.svg" alt="">
                               </div>
                            </div>
                           <div class="right-side">
                               <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
                               <h4>Avg.SLA 12hr</h4>
                               <button>Request</button>
                           </div>
                        </div>`
    })
    cardContainerPart2.innerHTML = str2
}
const search_bar_1_func = ()=>{
    
    const search_bar_1 = document.querySelector('#search-bar-1')
        search_bar_1.addEventListener('input',()=>{
            // console.log(search_bar_1.value.toLowerCase());
            let value =  search_bar_1.value.toLowerCase();
            let filteredArr = jsonData.filter(data => data.service_name.toLowerCase().includes(value));
            // console.log(filteredArr)
            let str3 = '';
        
        filteredArr.map(function(elem){
            str3 += `<div class="card">
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
        
        cardSection.innerHTML = str3;
        })
}
const search_bar_2_func = ()=>{
    let cardContainer = document.querySelector('.section-2-part-2 .card-container');
    const search_bar_2 = document.querySelector('#search-bar-2')
        search_bar_2.addEventListener('input',()=>{
            // console.log(search_bar_1.value.toLowerCase());
            let value =  search_bar_2.value.toLowerCase();
            let filteredArr = jsonData.filter(data => data.service_name.toLowerCase().includes(value));
            // console.log(filteredArr)
            let str3 = '';
        
        filteredArr.map(function(elem){
            str3 += `<div class="card">
                           <div class="left-side">
                               <h2>${elem.service_name}</h2>
                               <p>${elem.service_description}</p>
                               <div class="reviews">
                                  <img src="./images/rocket.svg" alt="">
                                  <h4>100+ Successful Deliveries</h4>
                                  <h4 id="review">12 Reviews</h4>
                                  <img src="./images/external-link 1.svg" alt="">
                               </div>
                            </div>
                           <div class="right-side">
                               <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
                               <h4>Avg.SLA 12hr</h4>
                               <button>Request</button>
                           </div>
                        </div>`
        })
        
         cardContainer.innerHTML = str3;
        })
}




section_2_part_1_cardsAdded()

section_2_part_2_cardsAdded()
search_bar_1_func();
search_bar_2_func();

const cardClickedFunc = ()=>{
    cardSection.addEventListener('click', function (elem) {
        let clickedCard = elem.target.closest('.card');
        if (!clickedCard) return;// Agar click kisi card par nahi hua toh kuch mat karo
        let isSelected = clickedCard.classList.contains("selected");
    
    
    

     

       if(!isSelected){
          clickedCard.classList.add("selected");
          clickedCard.style.border = `1px solid #ffb938`;  
          section_2_part_1.style.width = '30%'
          section_2_cards.style.flexDirection = 'column'
          section_2_part_1_header.style.flexDirection ='column'
          section_2_part_1.style.overflowY='auto'
          section_2_part_1.style.height = '100vh'
          cardSection.childNodes.forEach(card => {
            card.style.width = "100%"
          })
   
              
       } 
       else{
            clickedCard.classList.remove("selected");
            clickedCard.style.border = `1px solid #d4d4d4`
            section_2_part_1.style.width = '100%'
            section_2_cards.style.flexDirection = 'row'
             section_2_part_1_header.style.flexDirection ='row'

            //  for independent scrolling wala part
               section_2_part_1.style.overflowY='hidden'
               section_2_part_1.style.height = 'auto'
               cardSection.childNodes.forEach(card => {
                card.style.width = "32.5%"
              })
       }
       
    })

}
cardClickedFunc();

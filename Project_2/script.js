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
                        <button>${elem.practice_name}</button>
                        <div class="price">
                             <h6>Starting from</h6>
                             <h3>&#8377; ${elem.price}</h3>      
                        </div>
                    </div>
                </div>`
    })
    
    cardSection.innerHTML = str;
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

const search_bar_1_func = () => {
    const search_bar_1 = document.querySelector('#search-bar-1')
    search_bar_1.addEventListener('input', () => {
        let value = search_bar_1.value.toLowerCase();
        let filteredArr = jsonData.filter(data => data.service_name.toLowerCase().includes(value));
        let str3 = '';
        
        filteredArr.map(function(elem) {
            str3 += `<div class="card">
                         <div class="heading-para">
                        <h3>${elem.service_name}</h3>
                        <p>${elem.service_description}</p>
                         </div>
                        <div class="btn-and-price">
                            <button>${elem.practice_name}</button>
                            <div class="price">
                                 <h6>Starting from</h6>
                                 <h3>&#8377; ${elem.price}</h3>      
                            </div>
                        </div>
                    </div>`
        })
        
        cardSection.innerHTML = str3;
        
        // Check if section is in collapsed mode (30% width) and apply appropriate styling
        if (section_2_part_1.style.width === '33%') {
            cardSection.childNodes.forEach(card => {
                    card.style.width = "100%";
                    card.style.border = "1px solid #d4d4d4";
                
            });

            if (cardSection.querySelector('.selected')) {
                cardSection.querySelector('.selected').style.border = "1px solid #ffb938";
            }
        }
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

const cardClickedFunc = ()=>{
    cardSection.addEventListener('click', function (elem) {
        let clickedCard = elem.target.closest('.card');
        if (!clickedCard) return;// Agar click kisi card par nahi hua toh kuch mat karo
        let isSelected = clickedCard.classList.contains("selected");     

       if(!isSelected){
          clickedCard.classList.add("selected");
          clickedCard.style.border = `1px solid #ffb938`;  
          section_2_part_1.style.width = '33%'
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

const filter = ()=>{
    const filterBtn = document.querySelector('.section-2-part-1-header .searchBar-and-filter .filter');
    const filter_division = document.querySelector('.section-2-part-1-header .searchBar-and-filter .filter-division')
    const filter_open_btn = document.querySelector('.section-2-part-1-header .searchBar-and-filter .filter-division .filter-division-list .filter-division-list-head img');
    const filter_open = document.querySelector('.section-2-part-1-header .searchBar-and-filter .filter-division .filter-division-list .filter-division-list-hidden');
    const close = document.querySelector('.section-2-part-1-header .searchBar-and-filter .filter-division .headsection .close')
    let isSelected = false;
    let isOpen = false;

    close.addEventListener('click',function(){
        filterBtn.style.border = '1px solid #d4d4d4'
        filter_division.style.display = 'none'
        isSelected = false;
    })

    filter_open_btn.addEventListener('click',function(){
        if(!isOpen)
        filter_open.style.display = 'block'
        else{
              filter_open.style.display = 'none'
        }
        isOpen = !isOpen;
    })

    filterBtn.addEventListener('click',()=>{
      if(!isSelected){
        filterBtn.style.border = '1px solid #ffb938'
        filter_division.style.display = 'block'
      }else{
        filterBtn.style.border = '1px solid #d4d4d4'
        filter_division.style.display = 'none'
      }
      isSelected =  !isSelected 
    })
}

section_2_part_1_cardsAdded();
section_2_part_2_cardsAdded();
search_bar_1_func();
search_bar_2_func();
cardClickedFunc();
filter();


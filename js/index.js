var card = document.querySelector(".mycard")

var house=[
    {category: "Bedsitter", location:"makuyu", price:"6500", description:"near hospital"},
    {category: "sigleRoom", location:"Thika", price:"1500", description:"near DC Office"},
    {category: "1BedRoom", location:"Ruiru", price:"16500", description:"near zion Stage"},
    {category: "Bedsitter", location:"makuyu", price:"6500", description:"near hospital"},
]

// Looping through house array
var cardTemplate=''

 for(let i =0; i<house.length; i++){
   cardTemplate +=`
   <div class="col-md-6 col-lg-4 mb-2">
<div class="card" >
    <div class=" ratio ratio-1x1"><img src="asset/logo/house${i}.jpg" class="card-img-top img-fluid " alt="..."></div>
    <div class="card-body">
        <h5 class="card-title"> ${house[i].category}</h5>
        <p class="card-text">${house[i].location}s</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> Rent:${house[i].price}</li>
        <li class="list-group-item"> ${house[i].description}</li>
        
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Contact</a>
        <a href="#" class="btn btn-primary">Book Now</a>
    </div>
</div>
</div>
   `
 }

 card.innerHTML=cardTemplate

//  end loop 
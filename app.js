// const product_single = document.querySelector('.product-single-shop');
// const single_product = document.querySelector('#single_product');


// fetch('http://localhost:5050/devs').then(data => data.json()).then(data => {

//     let products = '' ;

//     data.map(product =>{
//         products += `


//         <div class="col-md-3">
//         <div class="card">
//             <div class="extra-img">
//                <a href = "#" onclick = "amrproduct(${product.id})" data-bs-toggle = "modal" data-bs-target = "#single_product"> <img src="${product.photo}" alt=""> </a>
//             </div>

//             <div class="card-body amrtitle">
//                 <h2>${product.name}</h2>
//                 <p>${product.location} </p>
//                 <p>Age : ${product.age}</p>
//             </div>
            
//         </div>
//     </div>
        
        
        
        
        
        
//         `;
//     });

//     product_single.innerHTML = products;
// });


// function  amrproduct(id){
    

//     const shop_modal = document.querySelector('.single-shop-modal');

//     shop_modal.innerHTML = '';

//  fetch('http://localhost:5050/devs/'+ id).then(data =>data.json()).then(data =>{

//     shop_modal.innerHTML = `

//     <div class="row">
//     <div class="col-md-6">
//         <div class="amrimg">
//             <img src="${data.photo}" alt="">
//         </div>

//     </div>

//     <div class="col-md-6 amrtitle">
//         <h2>${data.name}</h2>
//         <p>${data.skill}</p>
//         <a class="btn btn-info" href="#">Add product</a>
//     </div>
   
// </div>
    
    
//     `;
     
//  });

// };






// practice==============>

const shop_product  = document.querySelector('.shop_product');




fetch('http://localhost:5050/devs').then(data => data.json()).then(data =>{

    let products = '';

    data.map(product =>{
        products  += `


        <div class="col-md-3">
        <div class="card">
         <div class="extra-img">
          <a href="#" onclick = "amrproduct(${product.id})" data-bs-toggle = "modal" data-bs-target = "#product_modal"> <img src="${product.photo}" alt=""> </a>
         </div>

         <div class="card-body">
           <h2>Age ${product.age}</h2>
           <p>${product.location}</p>
           <p>${product.skill}</p>
         </div>
        </div>

       </div>
        
        
        
        
        
        
        
        
        
        
        `;
    });

    shop_product.innerHTML = products;




});


function amrproduct(id){

    let shop_modal = document.querySelector('.amr-modal');
    shop_modal.innerHTML = '';

    fetch('http://localhost:5050/devs/'+ id).then(data =>data.json()).then(data =>{

      
        shop_modal.innerHTML = `

        <div class="row">
        <div class="col-md-6">
          <div class="extra-img">
            <img src="${data.photo}" alt="">
          </div>
        </div>
        <div class="col-md-6">
          <h2>${data.name}</h2>
          <p>${data.skill}</p>
          <a class="btn btn-info">Add devs </a>
        </div>
      </div>



        
        
        
        
        
        
        
        `;
    



    });






};





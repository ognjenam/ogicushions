// $(document).on("click","a.button-cart",function(t){$(this).addClass("active"),t.preventDefault()}),$(document).ready(()=>{0==productsInCart().length||displayFullCart()});var displayFullCart=()=>{let t=productsInCart();$.ajax({url:"data/products.json",success:function(a){a=a.filter(a=>{for(let e of t)if(a.id==e.id)return a.quantity=e.quantity,!0;return!1}),buildTable(a)}})},buildTable=t=>{let a='
// <table class="layout display responsive-table">\n
//     <thead>\n
//         <tr>\n
//             <th>No.</th>\n
//             <th>Product</th>\n
//             <th>Price</th>\n
//             <th>Quantity</th>\n
//             <th>Remove</th>\n </tr>\n </thead>\n
//     <tbody>';for(let e of t)a+=`
//         <tr>\n
//             <td class="organisationnumber">${e.id}</td>\n
//             <td class="organisationname"><img src="${e.image.src}" alt="${e.image.alt}" style="height: 200px" /></td>\n
//             <td class="organisationnumber">$${e.price}</td>\n
//             <td class="organisationnumber">${e.quantity}</td>\n
//             <td class="actions">\n
//                 <button class="remove-item" onclick="removeFromCart(${e.id})" title="Remove">Remove</button>\n </td>\n </tr>`;a+="</tbody>
//     </table ",$(".page ").html(a)},productsInCart=()=>JSON.parse(localStorage.getItem("products ")),removeFromCart=t=>{let a=productsInCart().filter(a=>a.id!=t);localStorage.setItem("products ",JSON.stringify(a)),displayFullCart()};


$(document).ready(function(){

  $("a.button-cart").on("click", function(e){
    e.preventDefault();

  })

    // $.ajax({
    //   url: "data/products.json",
    //   method: "GET",
    //   dataType: "JSON",
    //   success: function(data){
    //
    //   },
    //   error: function()
    //   {
    //
    //   }
    // })


});

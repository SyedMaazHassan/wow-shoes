
let counter = 1;
let all_data_save = [];

let Product = localStorage.getItem ('Products')

// console.log(Product);


if (Product == null) {
	all_data_save = [];
}else{
	JSON.parse(Product);
}

Admin_add_card()



let cart = [];



function Admin_add_card() {

	let image_path = document.getElementById('image_path').value;
	let Org_price = document.getElementById('old_price').value;
	let Old_price = document.getElementById('new_price').value;
	let description = document.getElementById('descrip').value;

	if(image_path  &&  Org_price  &&  Old_price  &&  description) {
		all_data_save.forEach(element => {
	let html_element = `
	<div class="card mt-4 mx-3" style="width: 240px;" id='card-${counter}'>
						<img class="card-img-top" id='image-${counter}' src="shop-img/${image_path}" alt="Title">
						<div class="card-body text-center">
							<h5 class="card-title" id='dsc-${counter}'>${description}</h5>
							<p><span id='np-${counter}' class="Org-price">${Org_price}</span> <strike class="old-price" id='op-${counter}'>${Old_price}</strike></p>
							<div class="star-rating">
								<ul class="list-inline">
									<li class="list-inline-item"><i class="fa fa-star-o" aria-hidden="true"></i></li>
									<li class="list-inline-item"><i class="fa fa-star-o" aria-hidden="true"></i></li>
									<li class="list-inline-item"><i class="fa fa-star-o" aria-hidden="true"></i></li>
									<li class="list-inline-item"><i class="fa fa-star-o" aria-hidden="true"></i></li>
									<li class="list-inline-item"><i class="fa fa-star-o" aria-hidden="true"></i></li>
								</ul>
							</div>
							  <button onclick='add_cart(${counter})' class="btn"><i class="fa-solid fa-cart-shopping mx-2"></i>ADD TO CART</button>   
						</div>
					</div>
	
	`
					document.getElementById('all_card').innerHTML += html_element;
				});
				}
				else{
					html_elem2 = `
					<div id='alert' class="alert alert-danger alert-dismissible fade show w-100 my-3" role="alert">
				<strong>Ooops..!</strong> Please fill in your card fields. thank you!
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
						`
						document.getElementById('all_card').innerHTML = html_elem2;

						setTimeout(() => {
							$('#alert').remove();
					}, 5000);
				}
        

				let card_obj = {
					id : `card-${counter}`,
					image_path : `shop-img/${image_path}`,
					Org_price :	Org_price,
					Old_price : Old_price,
					description :	description

				}
				all_data_save.push(card_obj);
                
				document.getElementById('image_path').value = ''; 
				document.getElementById('old_price').value = ''; 
				document.getElementById('new_price').value = ''; 
				document.getElementById('descrip').value = ''; 
				
				localStorage.setItem('Products', JSON.stringify(all_data_save));
				
				counter++;
            }
        
            


let counter2 = 1;

			function add_cart(counter){

				let image_path = document.getElementById(`image-${counter}`).getAttribute('src');
				let old_price = document.getElementById(`op-${counter}`).textContent;
				let new_price = document.getElementById(`np-${counter}`).textContent;
				let descrip = document.getElementById(`dsc-${counter}`).textContent;


				let	html2 = `
				<div class="container row" id='card-${counter}'>
				<div class="border w-100 text-start col-sm-3 d-flex align-items-center justify-content-center">
				<div class="img">
					<img src="${image_path}" width="100" alt="">
				</div>
				<div class="card-body d-flex">
					<h6 class="card-text mx-auto">${descrip}</h6>
					<p class="item-price"><strike>${old_price}</strike>
						<b>${new_price}</b>

					</p>
					<b id='num-${counter2}'></b>
				</div>
				</div>
				</div>
						`
						document.getElementById('add_cart').innerHTML += html2

						cart.push(counter)

						localStorage.setItem('data',JSON.stringify(cart));
						counter2++;
			}



	// $(document).ready(function () {
	// $(`wish-icon${counter}`).click(function () {
	// 	$(this).toggleClass("fa-heart fa-heart-o");
	// });
// });

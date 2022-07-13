
let counter = localStorage.getItem('cart');

let get_num = JSON.parse(counter);




if (counter) {
    
    document.getElementById('item-count').style.display = '';
    document.getElementById('number_count').innerHTML = get_num.length;

}else{
    document.getElementById('item-count').style.display = 'none';
}


console.log(counter);

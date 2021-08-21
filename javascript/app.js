//Variables from dom to add event listeners

const ram__eightGB = document.getElementById('eight-gb-memory');
const ram__sixteenGB = document.getElementById('sixteen-gb-memory');
const storage__256GB = document.getElementById('storage-size-256');
const storage__512GB = document.getElementById('storage-size-512');
const storage__1TB = document.getElementById('storage-size-1tb');
const delivery__free = document.getElementById('delivery-free');
const delivery__notFree = document.getElementById('delivery-nonfree');
const coupon__btn = document.getElementById('coupon-btn');


//get the value and update price

function getValueAndUpdate(updateLocation, price){
    const location = document.getElementById(updateLocation);
    location.innerText = price;
}

//Update total on the claculation table after adding extras

function updateTotal(){
    const laptopCost = document.getElementById('laptop-price').innerText;
    const memoryCost = document.getElementById('memory-charge').innerText;
    const storageCost = document.getElementById('storage-charge').innerText;
    const deliveryCost = document.getElementById('delivery-charge').innerText;
	const displayTotal = document.getElementById('total');
	const totalAll = document.getElementById('total-all');

    const total = parseInt(laptopCost) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    
    displayTotal.innerText = total;
    totalAll.innerText = total;
}

//coupon apply and get the last total

function couponApply(){
	const input = document.getElementById('input');
	const previousTotal = document.getElementById('total');
	const grandTotal = document.getElementById('total-all');
	const preValue = parseInt(previousTotal.innerText);
	const grandValue = parseInt(grandTotal.innerText);
	
	if(input.value == 'stevekaku'){
        grandTotal.innerText = preValue - (preValue * 20 /100);
    }
    else if(input.value == '' || input.value !== 'stevekaku'){
        alert('Not a Valid Code');
	}
	else{
		grandTotal.innerText = preValue;
	}
    input.value = '';
}

// Event Listeners for all buttons

ram__eightGB.addEventListener('click', function(){
    getValueAndUpdate('memory-charge', 0);
    updateTotal();
})
ram__sixteenGB.addEventListener('click', function(){
    getValueAndUpdate('memory-charge', 180);
    updateTotal();
})
storage__256GB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 0);
    updateTotal();
})
storage__512GB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 100);
    updateTotal();
})
storage__1TB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 180);
    updateTotal();
})
delivery__free.addEventListener('click', function(){
    getValueAndUpdate('delivery-charge', 0);
    updateTotal();
})
delivery__notFree.addEventListener('click', function(){
    getValueAndUpdate('delivery-charge', 20);
    updateTotal()
})
coupon__btn.addEventListener('click', function(){
	couponApply();
})
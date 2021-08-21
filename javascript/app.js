//Variables from dom to add event listeners
const ram__eightGB = document.getElementById('eight-gb-memory');
const ram__sixteenGB = document.getElementById('sixteen-gb-memory');
const storage__256GB = document.getElementById('storage-size-256');
const storage__512GB = document.getElementById('storage-size-512');
const storage__1TB = document.getElementById('storage-size-1tb');
const delivery__free = document.getElementById('delivery-free');
const delivery__notFree = document.getElementById('delivery-nonfree');
const input = document.getElementById('input');
const coupon__btn = document.getElementById('coupon-btn');

//get the value and update price
function getValueAndUpdate(updateLocation, price){
    const location = document.getElementById(updateLocation);
    location.innerText = price;
}

//update total
function updateTotal(laptop,memory,storage,delivery,display){
    const laptopCost = document.getElementById(laptop).innerText;
    const memoryCost = document.getElementById(memory).innerText;
    const storageCost = document.getElementById(storage).innerText;
    const deliveryCost = document.getElementById(delivery).innerText;
	const displayTotal = document.getElementById(display);
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
        alert('not allowed')
	}
	else{
		grandTotal.innerText = preValue;
	}
				
}

// Event Listeners

ram__eightGB.addEventListener('click', function(){
    getValueAndUpdate('memory-charge', 0);
    updateTotal('laptop-price','memory-charge','storage-charge','delivery-charge','total')
    
})
ram__sixteenGB.addEventListener('click', function(){
    getValueAndUpdate('memory-charge', 180);
    
    updateTotal('laptop-price','memory-charge','storage-charge','delivery-charge','total')
})
storage__256GB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 0);
    updateTotal('laptop-price','memory-charge','storage-charge','delivery-charge','total')
})
storage__512GB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 100);
    updateTotal('laptop-price','memory-charge','storage-charge','delivery-charge','total')
})
storage__1TB.addEventListener('click', function(){
    getValueAndUpdate('storage-charge', 180);
    updateTotal('laptop-price','memory-charge','storage-charge','delivery-charge','total')
})
delivery__free.addEventListener('click', function(){
    getValueAndUpdate('delivery-charge', 0);
    updateTotal('laptop-price','memory-charge','storage-charge','delivery-charge','total')
})
delivery__notFree.addEventListener('click', function(){
    getValueAndUpdate('delivery-charge', 20);
    updateTotal('laptop-price','memory-charge','storage-charge','delivery-charge','total')
})
coupon__btn.addEventListener('click', function(){
	couponApply()
})

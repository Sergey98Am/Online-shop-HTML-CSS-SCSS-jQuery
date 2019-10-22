'use-strict';
$(document).ready(function() {
	$('.menu-toggle').click(function() {
		$('.menu-ul').addClass("m-ul");
	});
});
//dropdown//
var ul = document.getElementsByClassName('lang-ul');
var btn = document.getElementsByClassName('top-right')[0];
var btn1 = document.getElementsByClassName('top-right')[1];

function myFunc(a, b, c, d) {
	a.onclick = function() {
		ul[b].classList.toggle('ul-db');
		ul[d].classList.remove('ul-db');
	};
	c.onclick = function() {
		ul[d].classList.toggle('ul-db');
		ul[b].classList.remove('ul-db');
	};
}
myFunc(btn, 0, btn1, 1);

var menuUl = document.getElementsByClassName('column-2-ul');
var menuUl1 = document.getElementsByClassName('column-1-ul');
var menu = document.getElementsByClassName('menu-items')[1];
var menu1 = document.getElementsByClassName('menu-items')[2];
var menu2 = document.getElementsByClassName('menu-items')[4];
var menu3 = document.getElementsByClassName('menu-items')[6];
var mu = document.querySelectorAll(".c-uls li");
var ml = document.querySelector(".menu-ul");
mu.forEach(function(el){
	el.onclick = function(){
		ml.classList.remove("m-ul")
	}
});

myFunction(menu, 0, menu1, 0, menu2, 1);
function myFunction(a, b, c, d, e, f) {
	a.onclick = function() {
		menuUl[b].classList.toggle('menu-db');
		menuUl1[d].classList.remove('menu-db');
		menuUl1[f].classList.remove('menu-db');
	};
	c.onclick = function() {
		menuUl1[d].classList.toggle('menu-db');
		menuUl[b].classList.remove('menu-db');
		menuUl1[f].classList.remove('menu-db');
	};
	e.onclick = function() {
		menuUl1[f].classList.toggle('menu-db');
		menuUl[b].classList.remove('menu-db');
		menuUl1[d].classList.remove('menu-db');
	};
}
//end dropdown//

//slider//
var index = 1;

function npFunc(n) {
	imageFunc((index = index + n));
}
function dotFunc(n) {
	imageFunc((index = n));
}
function imageFunc(n) {
	var slide = document.querySelectorAll('.slide');
	var dot = document.querySelectorAll('.dot');
	if (n > slide.length) {
		index = 1;
	}
	if (n < 1) {
		index = slide.length;
	}
	for (var i = 0; i < slide.length; i++) {
		slide[i].style.display = 'none';
	}
	slide[index - 1].style.display = 'block';
	for (var i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	dot[index - 1].className += ' active';
}
imageFunc();
//end slider//

//checkbox//
var cb = document.querySelector('.cb');

cb.onchange = function() {
	if (this.checked === true) {
		this.nextElementSibling.classList.add('checked');
	} else {
		this.nextElementSibling.classList.remove('checked');
	}
};
//end checkbox//

//vm//
var bn = document.querySelector('.vmb');
bn.onclick = function() {
	var a = document.querySelectorAll('.prd');
	// var pr = document.querySelectorAll('.pr-hide');
	a.forEach(function(elem) {
		var cs = elem.classList.contains('pr-hide');
		if (cs) {
			elem.classList.remove("pr-hide");
			elem.classList.add("pr-show");
			bn.innerHTML = 'Read less';
		} else {
			elem.classList.add("pr-hide");
			elem.classList.remove("pr-show");
			
			bn.innerHTML = 'Read More';
		}
		console.log(bn);
	});
};
//end vm//

//modal//
var cart = document.querySelector('.icon-cart');
var close = document.querySelector('.cart-close');
var modal = document.querySelector('.cart');
document.onclick = function(e) {
	if (e.target === modal) {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	}
};
cart.onclick = function() {
	modal.style.display = 'flex';
	document.body.style.overflow = 'hidden';
};
close.onclick = function() {
	modal.style.display = 'none';
	document.body.style.overflow = 'auto';
};
//end modal//

//addCart//
function addCart() {
	var cards = document.querySelectorAll('.products .product');
	var cw = document.querySelector('.cart-wrapper');
	var cartEmpty = document.querySelector('#cart-empty');
	var counter = document.querySelector('.counter');
	cards.forEach(function(card) {
		var bttn = card.querySelector('.addCart');
		bttn.onclick = function() {
			var clone = card.cloneNode(true);
			cw.style.margin = '0';
			cw.appendChild(clone);

			showData();

			var removeBtn = clone.querySelector('.addCart');
			removeBtn.textContent = 'Remove From Cart';
			removeBtn.onclick = function() {
				clone.remove();
				showData();
			};
		};
	});

	function showData() {
		var cards = cw.querySelectorAll('.product');
		var price = cw.querySelectorAll('.price');
		var cartTotal = document.querySelector('.cart-total span');

		let sum = 0;
		counter.textContent = cards.length;

		price.forEach(function(cardPrice) {
			let price = parseFloat(cardPrice.textContent);
			sum = sum + price;
		});

		cartTotal.textContent = sum;

		if (cards.length === 0) {
			cw.appendChild(cartEmpty);
		} else {
			cartEmpty.remove();
		}
	}
}
addCart();
//end addCart//

//action//
function action() {
	var cards = document.querySelectorAll('.product');
	var cb = document.querySelector('.cb');
	cb.onclick = function() {
		cards.forEach(function(card) {
			var cardPrice = card.querySelector('.price');
			var price = parseFloat(cardPrice.textContent);
			var sale = card.querySelector('.sale');
			if (cb.checked && !sale) {
				card.style.display = 'none';
			} else {
				card.style.display = '';
			}
		});
	};
}
action();
//end action//

//search//
var cards = document.querySelectorAll('.product');
var searchBtn = document.querySelector('.search-btn');
var searchInp = document.querySelector('.search-inp');

searchBtn.onclick = function() {
	var searchText = new RegExp(searchInp.value.trim(), 'i');
	cards.forEach(function(card) {
		var title = card.querySelector('.title');
		if (!searchText.test(title.textContent)) {
			card.style.display = 'none';
		} else {
			card.style.display = '';
		}
	});
};
//end search//

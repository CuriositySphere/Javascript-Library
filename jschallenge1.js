function OmNomNom (hotdogquantity, hotdogpriceper, hotdogtax ){
	return hotdogquantity * hotdogpriceper * hotdogtax + (hotdogquantity + hotdogpriceper);
}
console.log(OmNomNom(150 , 1 , .07))
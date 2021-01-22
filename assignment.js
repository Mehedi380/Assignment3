// 1 : kilometerToMeter

function kilometerToMeter(Kilometer){
    var Meter = Kilometer * 1000;
    return Meter;
}

var resultMeter = kilometerToMeter(1);
console.log(resultmeter);


// 2 : budgetCalculator

function budgetCalculator(Watch, Phone, Laptop){
    var watchPrice = Watch * 50;
    var phonePrice = Phone * 100;
    var laptopPrice = Laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}

var resulBudget = budgetCalculator(1, 2, 3);
console.log(resulBudget);


// 3 : hotelCost

function hotelCost(dayCount){
    var totalPrice = 0;
    if (dayCount <= 10) {
        totalPrice = dayCount * 100;
    } else if (dayCount <= 20) {
        var firstDayStayPrice = 10 * 100;
        var secondDayStay = dayCount - 10;
        var secondDayStayPrice = secondDayStay * 80;
        var totalPrice = firstDayStayPrice + secondDayStayPrice;
    } else {
        var firstDayStayPrice = 10 * 100;
        var secondDayStayPrice = 10 * 80;
        var thirdDayStay = dayCount - 20;
        var thirdDayStayPrice = thirdDayStay * 50;
        var totalPrice = firstDayStayPrice + secondDayStayPrice + thirdDayStayPrice;
    }
    return totalPrice;
}

var hotelTotalCost = hotelCost(21);
console.log(hotelTotalCost);


// 4 : megaFriend

function megaFriend(friendsName){
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++){
        if (longestName.length < friendsName[i].length){
            longestName = friendsName[i];
        }
    }
    return longestName;
}

var listMegaFriend = megaFriend(['Abir Hasan', 'Afia Jannat', 'Fazley Atif Maruf', 'Sunny']);
console.log(listMegaFriend);
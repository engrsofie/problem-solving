// Problem-1
/* convert seer to mon */

function seerToMon (convertSeer){

    const mon = 40; //1mon==40seer
    const totalMon= convertSeer / mon;
    return totalMon;
}

const mon = seerToMon(120);
console.log(mon);


// Problem-2
/* product price and total sale return */
/* shirt = 100
pent= 200
juta=500 */

function totalSales(shirtPrice, pentPrice, jutaPrice) {
  const perShirtPrice = 100;
  const perPentPrice = 200;
  const perJutaPrice = 500;

  /*quantity calculation  */

  const shirtQuantityTotal = shirtPrice * perShirtPrice;
  const pentQuantityTotal = pentPrice * perPentPrice;
  const jutaQuantityTotal = jutaPrice * perJutaPrice;

  const totalQuantityPrice =
    shirtQuantityTotal + pentQuantityTotal + jutaQuantityTotal;
  return totalQuantityPrice;
}

const totalMoney = totalSales(4, 3, 1);
console.log(totalMoney);

// Problem-3
//deliveryCost

function deliveryCost (tShirtquantity) {

    const first100tShirt = 100;
    const second100tShirt = 80;
    const restTshirt = 50;

    if (tShirtquantity <= 100) {
      const count = tShirtquantity * first100tShirt;
      return count; 
    }

    else if (tShirtquantity > 100 && tShirtquantity <= 200 )  {
      const first100 = 100 * first100tShirt;
      const remainingTshirt = tShirtquantity - 100;
      const second100 = remainingTshirt * second100tShirt;
      const totalTshirt = first100 + second100;
    
      return totalTshirt;
    } 

    else {
      const first100 = 100 * first100tShirt;
      const second100 = 100 * second100tShirt;
      const remainingTshirt = tShirtquantity - 200;
      const remainingdelivery = remainingTshirt * restTshirt;
      const totalTshirt = first100 + second100 + remainingdelivery;
      return totalTshirt;
    }
  }
  const tShirt = deliveryCost(250);
  console.log(tShirt);

// Problem-4
//perfectFriend
function perfectFriend(friend) {
    
    for(let friendName of friend){
        let friends = friendName.length;
        if(friends == 5){
            return friendName;
        }
    }
  
  }
  var friendsss = ["shamim", "sany", "bappi", "shehab"];
  var result = perfectFriend(friendsss);
  console.log(result);
  
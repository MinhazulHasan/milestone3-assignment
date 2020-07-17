// Feet To Mile Converter
function feetToMile(feet){
    if(feet >= 0){
        var mile = feet * (1 / 5280);
        return mile;
    }
    else{
        console.log("Please give a positive number.");
    }
}

// Wood Calculator Function
function woodCalculator(chair, table, bed){
    if(Math.floor(chair) != Math.ceil(chair) || Math.floor(table) != Math.ceil(table) || Math.floor(bed) != Math.ceil(bed)){
        console.log("Decimal Value is not accepted.");
    }
    else if(chair >= 0 && table >= 0 && bed >= 0){
        var wood = (chair * 1) + (table * 3) + (bed * 5);
        return wood;
    }
    else{
        console.log("Input only positive number.");
    }
}

// Brick Calculator Function
function brickCalculator(totalFloor){
    if(totalFloor < 0){
        console.log("Floor can not be any negative number.")
    }
    else if(totalFloor <= 10){
        var bricks = totalFloor * 15 * 1000;
        return bricks;
    }
    else if(totalFloor <= 20){
        var bricks = 10 * 15 * 1000;
        totalFloor -= 10;
        bricks += totalFloor * 12 * 1000;
        return bricks;
    }
    else{
        var bricks = (10 * 15 * 1000) + (10 * 12 * 1000);
        totalFloor -= 20;
        bricks += totalFloor * 10 * 1000;
        return bricks;
    }
}

// Tiny Friend Searching Function
function tinyFriend(friendList){

    for(var i=0; i<friendList.length; i++){
        if(friendList[i] === '' || Number.isInteger(friendList[i]) ){
            console.log("Friend List is not valid");
            return -1;
        }

        for(var j=0; j < (friendList.length - i - 1) ; j++){
            if(friendList[j].length > friendList[j+1].length){
                var temp = friendList[j];
                friendList[j] = friendList[j+1];
                friendList[j+1] = temp;
            }
        }
    }

    var tinyFriendList = [friendList[0]];

    for(var i=1; i < friendList.length; i++){
        if(friendList[0].length == friendList[i].length){
            tinyFriendList.push(friendList[i]);
        }
    }

    if(tinyFriendList.length == 1){
        return tinyFriendList[0];
    }
    else{
        return tinyFriendList;
    }
}
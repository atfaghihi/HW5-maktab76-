function mostExpensive (obj){
    let arr1 = Object.values(jewelryMostExpensive);
    let arr2 = Object.keys(jewelryMostExpensive);
    // let expensive = Math.max(arr1[0], arr1[1], arr1[2]);
    // let mostPrice = arr1.indexOf(Math.max(arr1[0], arr1[1], arr1[2]));
    console.log("The most expensive one is:", arr2[arr1.indexOf(Math.max(...arr1))]);
}

const jewelryMostExpensive = {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
};
mostExpensive(jewelryMostExpensive);

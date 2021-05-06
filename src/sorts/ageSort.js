const ageSort = (a,b) => {
        // a should come before b in the sorted order
        if(a.age < b.age){
                return -1;
        // a should come after b in the sorted order
        }else if(a.age > b.age){
                return 1;
        // a and b are the same
        }else{
                return 0;
        }
}

module.exports = ageSort
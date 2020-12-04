
/**
* Sorting character of strings
* @args {String} input word
* @return {String} Sorted character string eg aaccbbbddd => abcd
**/

function hashString(str) {
    if(!!str && str.length >1 && /^[a-zA-Z]+$/.test(str)) {
     return return str.split("").sort().filter((item,index, self)=>(index>0 && item!=self[index-1])|| index==0).join("");
    }
    return undefined;
}

/**
* Count words that can be anagrams
* @args{String} input Strings
* @return {number} Number of strings that can be anagrams
**/
function countAnagram(str) {
    if(!!str && str. length >1){
       let arr =[];
        str.split(' ').forEach((itm) =>{
            let hash = hashString(itm.trim()) ;
            if(!!hash && arr. indexOf(hash) ==-1){
                arr. push(hash) ;
            }
        });
        return arr. length; 
    }
    return 0;
}

// test cases
console.log(countAnagram('aa god gdo ')); // 2
console.log(countAnagram('a c b c run urn urn')); // 1
console.log(countAnagram('k k k k bar foo'));// 2
console.log(countAnagram('k k k k bar f1oo'));// 1

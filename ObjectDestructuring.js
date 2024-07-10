const singer={
    singerName : "Katy Perry",
    famousSong : "harleys in hawai",
    anotherFamousSong: "Roar",
    year : 1000 
    
};


const song = singer.famousSong;
const singer1 = singer.singerName;

console.log(singer1,song);
// this would be traditional way. now 

const {famousSong,singerName} = singer;
console.log();
console.log(famousSong,singerName);

// this is how we de structure objects.
// we have to use same name while destructuring. if we want to give different names to variable then 
const { famousSong:var1,singerName:Sname}=singer;
console.log(var1,Sname);

// if we have more keys than we are destructuring then only those numkber of keys will be destructured as many we are mentioning while destructuring.
const { famousSong:var3,singerName:Sname1,...myObj2}=singer;
console.log(myObj2);
// here we can see that rest of the object got saved in another variable as an object.

let people = ["Greg","Mary","Devon","James"];

// for(var i=0;i<people.length;i++){
// 	console.log(people[i]);
// }

// let a = people.shift();
// console.log(people);

// let b = people.pop();
// console.log(people);

// let c = people.unshift("Matt");
// console.log(people);

// let d = people.push("Marianna");
// console.log(people);

// console.log(people.includes("Mary"));

// let z = people.splice(1,1);
// console.log(people);

// console.log(people.indexOf("Mary"))

// console.log(people.indexOf("Foo"))

// let x = people.splice(2,1,"Elizabeth","Artie");
// console.log(people);

// let person = ["Bob"];
// let newarr = people.concat(person);
// console.log(newarr)

////////////////////////////////

// var arr = [];
// for(var i=40;i<600;i++){
// 	if(i%11==0){
// 		arr.push(i);
// 	}
// }
// console.log(arr);


// var arr = [];
// for(var i=100;i<900;i++){
// 	if(i%2==0 && i%13==0){
// 		arr.push(i);
// 	}
// }
// console.log(arr);

/////////////////////////////////

// var arr = [1,2,3,2,1];
// var x;
// for(var i=0;i<=arr.length/2;i++){
// 	for(var j=arr.length-1; j>=arr.length/2; j--){
// 		if(arr[i]==arr[j]){
// 			x = "simetric"
// 		}else{
// 			x = "voch simetric" 
// 		}
// 	}
// }
// console.log(x)


// var arr = [1,2,3,2,1];
// var x = arr.length-1;
// var c;
// for(var i=0;i<arr.length;i++){
// 		if(arr[i]==arr[x]){
// 			c = "simetric";
// 			x--;
// 		}else{
// 			c = "voch simetric";
// 			break;
// 		}
// }
// console.log(c);


var arr = [7,41,13,3,33,6,21,-4,-666];
var x = Math.min(...arr); y = Math.max(...arr);
for(var i=arr.indexOf(y)+1; i<arr.indexOf(x); i++){
	console.log(arr[i]);
}

// var arr = [1,5,true,0,'hello',false,-5,'world',88];
// var arr1 = [];
// var arr2 = [];
// var arr3 = [];
// for(var i=0;i<arr.length;i++){
// 	if(typeof arr[i]=="string"){
// 		arr1.push(arr[i]);
// 	}else if(typeof arr[i]=="number"){
// 		arr2.push(arr[i]);
// 	}else if(typeof arr[i]=="boolean"){
// 		arr3.push(arr[i]);
// 	}
// }
// console.log(arr1,arr2,arr3);
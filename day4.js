//quastion no 1:
var obj1 = {name:"person 1",age:5};

var obj2 = {age:5,name:"person 1"};

var nameComp = (obj1.name&&obj2.age);

var ageComp = (obj1.name&&obj2.age);

var CompObj = (nameComp==ageComp)
if(CompObj){
    console.log("Comparatively both objects are same")
}
else{console.log("Both objects has different data")}

//quastion no 2:
var xhr = new XMLHttpRequest();


xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    
    var t = JSON.parse(this.response);
    for(i=0; i<250; i++){
    

    console.log(t[i].flag);
    
    }
  } else {

    console.log(xhr.responseText); 
  }
};


//xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");//COVID 19 DATA
xhr.open("GET", "http://api.countrylayer.com/v2/all?access_key=6b9a539764ac98c22b5fcb89c309f3ba ");// rest API URL

//we are sending a request
xhr.send();

//question no 3

let countries = "http://api.countrylayer.com/v2/all?access_key=6b9a539764ac98c22b5fcb89c309f3ba";

for(i=0; i<countries.length; i++){
    
     console.log(countries[i].name);
     console.log(countries[i].subregion);
     console.log(countries[i].region);  
     console.log(countries[i].population);

}


mydict= {"pizza":"پیتزا", 
        "fastfood": "فست فود",
        "sandwich": "ساندویچ",
        "burger": "برگر", 
        "kebab": "کباب",
        "salad": "سالاد", 
        "iranian": "غذای ایرانی",
        "pasta": "پاستا", 
        "fish": "ماهی",
        "breakfast": "صبحانه",
        "juice": "آبمیوه",
        "steak": "استیک",
        "soup": "سوپ"}

$(document).ready(function () {
$.getJSON('http://demo2469824.mockable.io/best-restaurants', function (data, status) {
        console.log(data);
        for (i = 0; i < 3; i++) {
                document.getElementById("restaurant-name-"+ i.toString(10)).innerHTML = data["restaurants"][i].name;
                document.getElementById("restaurant-image-"+ i.toString(10)).innerHTML = data["restaurants"][i].imgUrl;
                document.getElementById("restaurant-rate-"+ i.toString(10)).innerHTML = data["restaurants"][i].rate;
                if(data["restaurants"][i].rate == 5){
                        document.getElementById("star5-"+ i.toString(10)).checked = true;
                }
                else{
                        if(data["restaurants"][i].rate >= 4){
                                document.getElementById("star4-"+ i.toString(10)).checked = true;
                        }
                        else{
                                if(data["restaurants"][i].rate >= 3){
                                        document.getElementById("star3-"+ i.toString(10)).checked = true;
                                }
                                else{
                                        if(data["restaurants"][i].rate >= 2){
                                                document.getElementById("star2-"+ i.toString(10)).checked = true;
                                        }  
                                        else{
                                                if(data["restaurants"][i].rate >= 1){
                                                        document.getElementById("star1-"+ i.toString(10)).checked = true;
                                                }   
                                        }
                                }
                        }
                }
                let temp = "";
                let first = true;
                let t = "";
                for (food in data["restaurants"][i].foods) {
                        
                        if (first){
                                t = data["restaurants"][i].foods[food];
                                temp = mydict[t]
                                if (!mydict[t]){
                                        temp = t
                                }
                                first = false;
                        }
                        else{
                                t = data["restaurants"][i].foods[food]
                                if (!mydict[t]){
                                        temp = temp + " . " + t
                                }
                                else{
                                        temp = temp + " . " + mydict[t]
                                }
                                
                        }
                        
                }
                console.log(temp)
                document.getElementById("restaurant-foods-"+ i.toString(10)).innerHTML = temp;
                document.getElementById("restaurant-address-"+ i.toString(10)).innerHTML = data["restaurants"][i].address;
                document.getElementById("restaurant-numOfRates-"+ i.toString(10)).innerHTML = "(" + data["restaurants"][i].numOfRates.toString(10)+")";
        } 
        for (i = 3; i < 15; i++) {
                document.getElementById("restaurant-name-"+ i.toString(10)).innerHTML = data["restaurants"][i].name;
                document.getElementById("restaurant-image-"+ i.toString(10)).innerHTML = data["restaurants"][i].imgUrl;
                
        }
});
});
                // best_resturants();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                console.log("heereeeeeeeeeeeeee")
                myFunction(this);
        }
};
xhttp.open("GET", "http://demo2469824.mockable.io/foods" , true);
xhttp.send();
function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        console.log(xmlDoc)
        for (i=0; i<4; i++){
                let temp = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue
                document.getElementById("food-header-"+ i.toString(10)).innerHTML = mydict[temp]
                if (!mydict[temp]){
                        document.getElementById("food-header-"+ i.toString(10)).innerHTML = temp
                }

                temp = xmlDoc.getElementsByTagName("count")[i].childNodes[0].nodeValue
                document.getElementById("food-text-"+ i.toString(10)).innerHTML = temp + " رستوران فعال "

                temp = xmlDoc.getElementsByTagName("imgUrl")[i].childNodes[0].nodeValue
                temp = "linear-gradient(to bottom, rgba(0,0,0,0) 2%, rgba(0,0,0,1)), " + "url('" + temp  + "')" 
                document.getElementById("food-image-"+ i.toString(10)).style.background =  temp 
                document.getElementById("food-image-"+ i.toString(10)).style.backgroundSize = "cover"

        }
        for (i=4; i<xmlDoc.getElementsByTagName("name").length; i++){
                let temp = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue
                let newB = document.createElement("a")
                newB.className = "myButton2"
                newB.id = "button-food-" +  i.toString(10)
                newB.innerHTML = mydict[temp]
                if (!mydict[temp]){
                        newB.innerHTML = temp 
                }
                let t = document.getElementById("foood")
                t.insertAdjacentElement("afterend", newB);
                if ((i-4)%9 == 8){
                        let newB = document.createElement("br")
                        let t = document.getElementById("foood")
                        t.insertAdjacentElement("afterend", newB);

                }

        }


}


/* 1. Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum.

2. Write a JavaScript program to check two given numbers and return true if one of 
the number is 50 or if their sum is 50.

3. Write a JavaScript program to remove a character at the specified position of a given 
string and return the new string

4. Write a program to check whether a specified character exists within the 
2nd to 4th position in a given string.

5. Write a JavaScript program to check from two given integers whether one of 
them is 8 or their sum or difference is 8. 

6. Write a JavaScript program to convert the letters of a given string in alphabetical order. 

7. Write a JavaScript program to concatenate two strings except their first character.

8. Write a JavaScript program to check whether the first and last elements are equal 
of a given array of integers length 3.

9. Write a JavaScript program to create a new string from a given string changing the position of 
first and last characters. The string length must 
be greater than or equal to 1

10. Write a JavaScript program to display the city name if the string begins with "Los" 
or "New" otherwise return blank.*/

function returnSum(a,b) {
    if(a==b) {
        return (a+b)*3
    }
    else{
        return a+b
    }
}
console.log(returnSum(2,2))


function check50(a,b) {
    if(a==50 || b==50) {
        return true
    }
    else if(a+b == 50){
        return true
    }
    else{
        return false
    }
}
console.log(check50(24,25))


function subStringer(){
    const word ="Kolovođa"
    console.log(word.substring(1,8))
} 
subStringer()


function doesExist(string) {
    if(string.substring(2,3) === "m"){
        return(true)
    }
    else{
        return(false)
    }
}
console.log(doesExist("Ćamil"))


function checkIntegers(a,b){
    if(a==8||b==8){
        return true
    }
    else if(a+b==8 || a-b==8 || b-a==8){
        return true
    }
    else{
        return false
    } 
}
console.log(checkIntegers(1,9))


function sortAlphabetikli(string) {
   return string.split("").sort().join("")
}
console.log(sortAlphabetikli("kasfdhoiu"))

function concatinate2Strings(a,b) {
    const A = a.substring(1,5)
    const B = b.substring(1,6)
   return A.concat(B)
}
console.log(concatinate2Strings("Eufrat","Tigris"))


function arrCheck(arr) {
    if(arr[0] == arr[2]) {
        return true
    }
    else{
        return false
    }
}
console.log(arrCheck([10,20,30]))


function changeString(string) {
   return string.replace("K","r").replace("j","K").substring(0,9)
}
console.log(changeString("Kalabajzer"))


function displayCity(city) {
    if(city.startsWith("Los")){
        console.log("Los Angeles")
    }
    else if(city.startsWith("New")){
        console.log("New York")
    }
    else{
        console.log("-------------")
    }
}
displayCity("asjd")
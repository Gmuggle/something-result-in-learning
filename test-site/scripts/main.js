let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/harddisk.gif'){
      myImage.setAttribute('src','images/girl.gif');
    }
    else{
        myImage.setAttribute('src','images/harddisk.gif');
    }
        
}

function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent='Mozilla酷毙了，'+name+'!';
}

function setUserName(){
    let myName=prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
class home{
    readonly name = "what";
    color :string ;
    floor;
    isParking;

    openHome(){
        console.log('open');
    }
    closeHome(){
        setTimeout(
            function(){
                //document.body.innerHTML = "No Home";
                console.log('closed')
            },1000
        )
    }
    

    constructor(homeName,homeColor,homeFloor){
        this.name = homeName;
        this.color = homeColor;
        this.floor = homeFloor;
        console.log(`${this.name}`);
        console.log(`${this.color}`);
        console.log(`${this.floor}`);
        document.body.innerHTML = "";
        let closeImage = document.createElement('div');
        closeImage.setAttribute('onclick','divclickclose()');
        let homeImage = document.createElement('img');
        homeImage.setAttribute('src','home.svg');
        homeImage.setAttribute('width','25%');
        closeImage.appendChild(homeImage);       
        document.body.appendChild(closeImage);
        
    }
}

    let letHome = () =>{     
        let myHome = new home('home is everything','red','3');
        myHome.openHome();
        myHome.closeHome();

    }

    let divclickclose = () => {
        document.body.innerHTML = "";
        let changeDiv = document.createElement('div');
        changeDiv.setAttribute('onclick','letHome()');
        let change = document.createElement('img');
        change.setAttribute('src','home1.svg');
        change.style.width = '250px';
        changeDiv.appendChild(change);
        document.body.appendChild(changeDiv);
    }
    
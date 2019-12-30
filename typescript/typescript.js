var home = /** @class */ (function () {
    function home(homeName, homeColor, homeFloor) {
        this.name = "what";
        this.name = homeName;
        this.color = homeColor;
        this.floor = homeFloor;
        console.log("" + this.name);
        console.log("" + this.color);
        console.log("" + this.floor);
        document.body.innerHTML = "";
        var closeImage = document.createElement('div');
        closeImage.setAttribute('onclick', 'divclickclose()');
        var homeImage = document.createElement('img');
        homeImage.setAttribute('src', 'home.svg');
        homeImage.setAttribute('width', '25%');
        closeImage.appendChild(homeImage);
        document.body.appendChild(closeImage);
    }
    home.prototype.openHome = function () {
        console.log('open');
    };
    home.prototype.closeHome = function () {
        setTimeout(function () {
            //document.body.innerHTML = "No Home";
            console.log('closed');
        }, 1000);
    };
    return home;
}());
var letHome = function () {
    var myHome = new home('home is everything', 'red', '3');
    myHome.openHome();
    myHome.closeHome();
};
var divclickclose = function () {
    document.body.innerHTML = "";
    var changeDiv = document.createElement('div');
    changeDiv.setAttribute('onclick', 'letHome()');
    var change = document.createElement('img');
    change.setAttribute('src', 'home1.svg');
    change.style.width = '250px';
    changeDiv.appendChild(change);
    document.body.appendChild(changeDiv);
};

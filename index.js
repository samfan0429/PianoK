var displayVal = document.getElementById("res");
var displayName = document.getElementById("name");
var displayHz = document.getElementById("hertz");

function clicked()
{
    displayVal.innerHTML = this.dataset.note + "번째 피아노 키";
    displayName.innerHTML = this.dataset.name;
    var calc = Math.pow(2.0,(this.dataset.note-49.0)/12.0)*440;
    displayHz.innerHTML = Math.round(calc) + " Hz";
}

function firstThree()
{
    var keys = document.getElementById("keys");

    var newElement = document.createElement("div");
    newElement.classList.add("white");
    newElement.dataset.name = "라";
    newElement.dataset.note = 1;
    newElement.addEventListener("click", clicked);
    keys.appendChild(newElement);

    var newElement = document.createElement("div");
    newElement.classList.add("black");
    newElement.dataset.name = "라&#x266F;, 시&#9837;";
    newElement.dataset.note = 2;
    newElement.addEventListener("click", clicked);
    keys.appendChild(newElement);

    var newElement = document.createElement("div");
    newElement.classList.add("white");
    newElement.dataset.name = "시";
    newElement.dataset.note = 3;
    newElement.addEventListener("click", clicked);
    keys.appendChild(newElement);
}

function addKeys()
{
    var keys = document.getElementById("keys");
    for(var i=4; i<=88;i++)
    {
        var newElement = document.createElement("div");
        if((i-3)%12==2||(i-3)%12==4||(i-3)%12==7||(i-3)%12==9||(i-3)%12==11)
        {
            newElement.classList.add("black");
            if((i-3)%12==2)
            {
                newElement.dataset.name = "도&#x266F;, 레&#9837;";
            } else if((i-3)%12==4)
            {
                newElement.dataset.name = "레&#x266F;, 미&#9837;";
            } else if((i-3)%12==7)
            {
                newElement.dataset.name = "파&#x266F;, 솔&#9837;";
            } else if((i-3)%12==9)
            {
                newElement.dataset.name = "솔&#x266F;, 라&#9837;";
            } else
            {
                newElement.dataset.name = "라&#x266F;, 시&#9837;";
            }
        } else
        {
            newElement.classList.add("white");
            if((i-3)%12==1)
            {
                newElement.dataset.name = "도";
            } else if((i-3)%12==3)
            {
                newElement.dataset.name = "레";
            } else if((i-3)%12==5)
            {
                newElement.dataset.name = "미";
            } else if((i-3)%12==6)
            {
                newElement.dataset.name = "파";
            } else if((i-3)%12==8)
            {
                newElement.dataset.name = "미";
            } else if((i-3)%12==10)
            {
                newElement.dataset.name = "파";
            } else
            {
                newElement.dataset.name = "시";
            }
        }
        newElement.addEventListener("click", clicked);
        newElement.dataset.note = i;
        keys.appendChild(newElement);
    }
}

firstThree();
addKeys();
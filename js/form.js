class Form {
    constructor(){
        
    }
    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(150,10);
        var input = createInput("Name");
        var button = createButton('play');
        input.position(200,200);
        button.position(300,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('H2');
            greeting.html("HI "+name);
            greeting.position(250,250);
        })
    }
}
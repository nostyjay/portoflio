
function initListeners(){
    $('nav a, button').click(function(e){
        let aId = this.id;
        var div = document.getElementById(aId);
        div.classList.remove('active-page');
        if(div.className != 'noLine'){
            div.className = 'active-page';  
        }

        MODEL.getPage(aId);


    })

    $('#app #viewButton').click(function(e){
        MODEL.getViewPage();
    })

    $('#app #addIngredient').click(function(e){
        MODEL.addIng();
    })
    $('#app #addIngredient').click(function(e){
        MODEL.addIns();
    })
    $('#app .editPage').click(function(e){
        MODEL.addIng();
    })
    $('#app .editPage').click(function(e){
        MODEL.addIns();
    })

    $('.burger').click(function(){
        $('nav').toggleClass('displayNav')
        $('.burger').toggle()
        $('.closeBurger').toggle()
    })
    $('.closeBurger').click(function(){
        $('nav').toggleClass('displayNav')
        $('.burger').toggle()
        $('.closeBurger').toggle()
    })
    
}

function initView(){
    
    $.get('./views/navigation.html', function(data){
        $('#nav').html(data);})

    $.get('./views/home/home.html', function(data){
        $('#app').html(data);
        initListeners();
    })

    $.get('./views/footer.html', function(data){
        $('#app .container').append(data);
    })




}

$(document).ready(function(){
    initView();
})


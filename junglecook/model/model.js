var MODEL = (function (e){
    let ingCount = 4;
    let insCount = 4;
    let ingCountCreate = 4;
    let insCountCreate = 4;
    var recipeId = 4
    let editIngCount;
    let editInsCount;
    let editIngCount2;
    let editInsCount2;
    let myIngCount = 2;
    let myInsCount = 2;
    let loggedUser = '';
    let loggedPass = '';
    let loggedIn = false;

    var _getPage = function(view){
//GET HTML PAGE TO INJECT AND INJECT
        $.get(`./views/${view}/${view}.html`, function(data){
            $('#app').html(data);

//apply footer to page
            $.get('./views/footer.html', function(data){
                $('#app .container').append(data);
            })
//ADD LISTENERS FOR EACH PAGE AFTER INITIALIZATION
            //login page
            if(view == 'login'){
                if(!loggedIn){
                $("#loginButton").click(function(e){
                    let lUserName = $('.loginPage .loginWrapper .login #lUser').val()
                    let lPassWord = $('.loginPage .loginWrapper .login #lUser').val()
                        Object.keys(SavedUsers).forEach(function(key){
                            if(loggedUser == '' || loggedUser == null || loggedUser == undefined){
                                    if (SavedUsers[key].user == lUserName){
                                        loggedUser = lUserName;
                                        console.log(loggedUser);
                                        return
                                    }
                            } else {
                                return
                            }
                        })
                        Object.keys(SavedUsers).forEach(function(key){
                            if(loggedPass == '' || loggedPass == null || loggedPass == undefined){
                                
                                    if (SavedUsers[key].pass == lPassWord){
                                        loggedPass = lPassWord;
                                        console.log(loggedPass);
                                        return
                                    }
                            } else {
                                return
                            }
                        })

                        if(loggedUser != '' && loggedPass != ''){
                            loggedIn = true;
                            $.get('./views/yourRecipes/yourRecipes.html', function(data){
                                $('#app').html(data)
                                $('#app .container').append(`
                                    <h2 style="margin:100px auto;">time to start cookin'!</h2>
                                `)
                            })
                            Swal.fire({
                                title: 'login success!',
                                text: `you may now start editing your recipes!`,
                                icon: 'success',
                                confirmButtonText: 'continue'
                            })
                            $('nav .links #yourRecipes').css("display", "inline")
                            $('nav button').html("Logout")
                            $('.loginBtn').attr("id", "logout")
                            $('nav #logout').click(function(e){
                                
                                $.get('./views/yourRecipes/yourRecipes.html', function(data){
                                    $('#app').html(data)
                                    $('#app .container').append(`
                                        <h2 style="margin:100px auto;">logged out...</h2>
                                    `)

                                     })
                                 $('#logout').attr("id", "login")
                        // $('nav #login').html("Login")
                            })
                        } else {
                            Swal.fire({
                                title: 'login failed!',
                                text: `user does not exist`,
                                icon: 'error',
                                confirmButtonText: 'try again'
                            })
                            
                        }

                })
            } else{
                $("#loginButton").click(function(e){
                    let lUserName = $('.loginPage .loginWrapper .login #lUser').val()
                    let lPassWord = $('.loginPage .loginWrapper .login #lUser').val()
                        Object.keys(SavedUsers).forEach(function(key){
                            if(loggedUser == '' || loggedUser == null || loggedUser == undefined){
                                    if (SavedUsers[key].user == lUserName){
                                        loggedUser = lUserName;
                                        console.log(loggedUser);
                                        return
                                    }
                            } else {
                                return
                            }
                        })
                        Object.keys(SavedUsers).forEach(function(key){
                            if(loggedPass == '' || loggedPass == null || loggedPass == undefined){
                                
                                    if (SavedUsers[key].pass == lPassWord){
                                        loggedPass = lPassWord;
                                        console.log(loggedPass);
                                        return
                                    }
                            } else {
                                return
                            }
                        })

                        if(loggedUser != '' && loggedPass != ''){
                            loggedIn = true;
                            $.get('./views/yourRecipes/yourRecipes.html', function(data){
                                $('#app').html(data)
                                $('#app .container').append(`
                                    <h2 style="margin:100px auto;">time to start cookin'!</h2>
                                `)
                            })
                            Swal.fire({
                                title: 'login success!',
                                text: `you may now start editing your recipes!`,
                                icon: 'success',
                                confirmButtonText: 'continue'
                            })
                            $('nav .links #yourRecipes').css("display", "none")
                            $('nav button').html("Login")
                            $('.loginBtn').attr("id", "login")
                            $('nav #logout').click(function(e){
                                
                                $.get('./views/yourRecipes/yourRecipes.html', function(data){
                                    $('#app').html(data)
                                    $('#app .container').append(`
                                        <h2 style="margin:100px auto;">logged out...</h2>
                                    `)

                                     })
                                 $('#logout').attr("id", "login")
                        // $('nav #login').html("Login")
                            })
                        } else {
                            Swal.fire({
                                title: 'login failed!',
                                text: `user does not exist`,
                                icon: 'error',
                                confirmButtonText: 'try again'
                            })
                            
                        }

                })
            }
        
        }
            //listeners for create page
            if(view == 'create'){
                if(loggedIn){
                    //ingredient plus button
                 $('#app #addIngredient').click(function(e){
                    $('.inputs').append(`<input type="text" id="ingredient${ingCountCreate}" placeholder="ingredient #${ingCountCreate}"></input>`)
                    ingCountCreate++;
                    myIngCount++;
                    })
                    //instruction plus button
                $('#app #addInstruction').click(function(e){
                    $('.inputs2').append(`<input type="text" id="instruction${insCountCreate}" placeholder="instruction #${insCountCreate}"></input>`)
                    insCountCreate++;
                    myInsCount++;
                    })
            //CREATE NEW RECIPE
                $('#app #createRecipe').click(function(e){
                    let recipeNum = 3

                    var recipeName = $('#recipe-name').val()
                    var recipeDes = $('#recipe-des').val()
                    var recipeTime = $('#recipe-time').val()
                    var recipeServe = $('#recipe-serve').val()
                    var recipeIngs = []
                    var recipeIns = []

                    for(let i = 0; i <= myIngCount; i++){
                        recipeIngs[i] = $(`#ingredient${i+1}`).val()
                    }
                    for(let i = 0; i <= myInsCount; i++){
                        recipeIns[i] = $(`#instruction${i+1}`).val()
                    }

                    MyRecipes.push({
                        "id":recipeId,
                        "name":recipeName,
                        "ingredients":recipeIngs,
                        "instructions":recipeIns,
                        "description":recipeDes,
                        "cooktime":recipeTime,
                        "servings":recipeServe,
                    })
                    recipeId++;
                    Swal.fire({
                        title: 'Recipe Created',
                        text: `Recipe successfully Created`,
                        icon: 'success',
                        confirmButtonText: 'continue'
                    })
                })
            } else{
                $.get('./views/yourRecipes/yourRecipes.html', function(data){
                    $('#app').html(data)
                    $('#app #yourRecipesWrap').append(`
                        <h2 style="margin:100px auto;">please login to continue...</h2>
                    `)
                })
                Swal.fire({
                    title: 'sorry...',
                    text: `you must login to create new recipes`,
                    icon: 'warning',
                    confirmButtonText: 'continue'
                    
                  })     
 
            }
        }
            //listeners for yourRecipes page
            if(view == 'yourRecipes'){
                if(loggedIn){
                for(recipe in MyRecipes){
                    $('#yourRecipesWrap .card-wrapper').append(`
                    <div class="card">
                    <div class="card-content">
                    <div class="card-img" style='background-image: url(${MyRecipes[recipe].image});'>
                        <button class='viewButton' id="${MyRecipes[recipe].id}">View</button>
                    </div>
                    <div class="card-text">
                        <h3>${MyRecipes[recipe].name}</h3>
                        <p>${MyRecipes[recipe].description}</p>
                        <div class="time">
                            <div class="time-img"></div>
                            <div class="time-text">${MyRecipes[recipe].cooktime}</div>
                        </div>
                        <div class="servings">
                            <div class="servings-img"></div>
                            <div class="servings-text">${MyRecipes[recipe].servings}</div>
                        </div>
                        </div>
                    </div>
                    <div class="card-buttons">
                        <button class="editBtn" id="${MyRecipes[recipe].id}">Edit Recipe</button>
                        <button class='deleteButton' id="${MyRecipes[recipe].id}">Delete</button>
                    </div>
                </div> 
                    `)

                    $('.deleteButton').click(function(e){
                        let name;
                        let view = this.id
                        console.log('clicked');
                        for(recipe in MyRecipes){
                            if(MyRecipes[recipe].id == view){
                                name = MyRecipes[recipe].name
                                MyRecipes.splice(recipe, 1)
                                console.log(MyRecipes);
                                
                            }
                            Swal.fire({
                                title: 'deleted',
                                text: `${name} successfully deleted`,
                                icon: 'success',
                                confirmButtonText: 'continue'
                              })                        
                        }
                        $.get('./views/yourRecipes/yourRecipes.html', function(data){
                            $('#app .container').html(data)
                            $('#app .yourRecipes').append(`
                                <h2 style="margin:0 auto;">Successfully deleted Recipe! Keep on cookin'!</h2>
                            `)
                        })
                    })
                
                    $(`.editBtn`).click(function(e){

                        console.log(this.id);
                        let view = this.id;

                        $.get('./views/editRecipes/editRecipes.html', function(data){
                            $('#app').html(data)
                            for(recipe in MyRecipes){
                                editIngCount = MyRecipes[recipe].ingredients.length;
                                editInsCount = MyRecipes[recipe].instructions.length;
                                console.log("editingcount: " + editIngCount);
                                let eIngCount = 0
                                let eInsCount = 0
                                if(MyRecipes[recipe].id == view){
                                    $('.editPage .recipe-des').empty();
                                    $('.editPage .recipe-des').append(`
                                        <input type="text" id="recipe-image" placeholder="Add Recipe Image">
                                        <input type="text" id="recipe-name" value="${MyRecipes[recipe].name}">
                                        <input type="text" id="recipe-des" value="${MyRecipes[recipe].description}">
                                        <input type="text" id="recipe-time" value="${MyRecipes[recipe].cooktime}">
                                        <input type="text" id="recipe-serve" value="${MyRecipes[recipe].servings}">
                                        `)
                                    
                                    for(let ingredient of MyRecipes[recipe].ingredients){
                                        $('.editPage .inputs').append(`
                                            <input type="text" id="ingredient${eIngCount}" value="${ingredient}">
                                        `)
                                        eIngCount++;
                                    }
                                    for(let instruction of MyRecipes[recipe].instructions){
                                        $('.editPage .inputs2').append(`
                                        <input type="text" id="instruction${eInsCount}" value="${instruction}">
                                    `)
                                        eInsCount++;
                                    }
                                    $('.editPage .createWrapper').append(`
                                        <button class="createButton" id="${MyRecipes[recipe].id}">Submit Changes</button>
                                    `)
                                    eIngCount = MyRecipes[recipe].ingredients.length + 1;
                                    $('#app #addIngredient').click(function(e){
                                        $('.inputs').append(`<input type="text" id="ingredient${eIngCount}" placeholder="ingredient #${eIngCount}"></input>`)
                                        ingCountCreate++;
                                        myIngCount++;
                                        editIngCount++;
                                        eIngCount++;
                
                                        })
                                        //instruction plus button
                                    eInsCount = MyRecipes[recipe].instructions.length + 1;
                                    $('#app #addInstruction').click(function(e){
                                        $('.inputs2').append(`<input type="text" id="instruction${eInsCount}" placeholder="instruction #${eInsCount}"></input>`)
                                        ingCountCreate++;
                                        myIngCount++;
                                        editInsCount++;
                                        eInsCount++;
                                        
                                        })
                        }

                        
                    
                    }

                    $('.createButton').click(function(e){
                        
                        let view2 = this.id;   
                        for(recipe in MyRecipes){ 
                             
                            if(view2 == MyRecipes[recipe].id){       
                                var recipeName = $('#recipe-name').val()
                                var recipeDes = $('#recipe-des').val()
                                var recipeTime = $('#recipe-time').val()
                                var recipeServe = $('#recipe-serve').val()
                                var recipeIngs = []
                                var recipeIns = []
                            

                            for(let i = 1; i < MyRecipes[recipe].ingredients.length; i++){
                                recipeIngs[i] = $(`#ingredient${i+1}`).val()
                            }
                            for(let i = 0; i < MyRecipes[recipe].instructions.length; i++){
                                recipeIns[i] = $(`#instruction${i+1}`).val()
                            }

                            let newRecipeId;
                            let newRecipeDes;
                            let newRecipeIng = []
                            let newRecipeIns = []
                            let newRecipeName;
                            let newRecipeServe;
                            let newRecipeTime;

                            //set ID
                            if(MyRecipes[recipe].id != "" || MyRecipes[recipe].id != null){
                                newRecipeId = MyRecipes[recipe].id;
                                console.log(newRecipeId); 
                            } else if (MyRecipes[recipe].id == "" || MyRecipes[recipe].id == null || MyRecipes[recipe].id == undefined){
                                newRecipeId = recipeId;
                                recipeId++;
                                console.log(newRecipeId); 
                            }

                            //set NAME
                            if(MyRecipes[recipe].name != "" || MyRecipes[recipe].name != null){
                                newRecipeName = $('#recipe-name').val();
                                console.log(newRecipeName); 
                            } else if (MyRecipes[recipe].name == "" || MyRecipes[recipe].name == null || MyRecipes[recipe].name == undefined){
                                newRecipeName = recipeName;
                                console.log(newRecipeName); 
                            }

                            //set DESCRIPTION
                            if(MyRecipes[recipe].description != "" || MyRecipes[recipe].description != null){
                                newRecipeDes = $('#recipe-des').val();
                                console.log(newRecipeDes); 
                            } else if (MyRecipes[recipe].description == "" || MyRecipes[recipe].description == null || MyRecipes[recipe].description == undefined){
                                newRecipeDes = recipeDes;
                                console.log(newRecipeDes); 
                            }

                            //set TIME
                            if(MyRecipes[recipe].cooktime != "" || MyRecipes[recipe].cooktime != null){
                                newRecipeTime = $('#recipe-time').val();
                                console.log(newRecipeTime); 
                            } else if (MyRecipes[recipe].cooktime == "" || MyRecipes[recipe].cooktime == null || MyRecipes[recipe].cooktime == undefined){
                                newRecipeTime = recipeTime;
                                console.log(newRecipeTime); ;
                            }

                            //set SERVE
                            if(MyRecipes[recipe].servings != "" || MyRecipes[recipe].servings != null){
                                newRecipeServe = $('#recipe-serve').val();
                                console.log(newRecipeServe); 
                            } else if (MyRecipes[recipe].servings == "" || MyRecipes[recipe].servings == null || MyRecipes[recipe].servings == undefined){
                                newRecipeServe = recipeServe;
                                console.log(newRecipeServe); 
                            }

                            //set INGREDIENTS
                            if(MyRecipes[recipe].ingredients != "" || MyRecipes[recipe].ingredients != null || MyRecipes[recipe].ingredients != undefined){
                                for(let i = 0; i < editIngCount - 4; i++){
                                    newRecipeIng[i] = $(`#ingredient${i+1}`).val()
                                }
                                console.log(newRecipeIng); 
                            } else if (MyRecipes[recipe].ingredients == "" || MyRecipes[recipe].ingredients == null || MyRecipes[recipe].ingredients == undefined){
                                for(let i = 0; i < editIngCount - 4; i++){
                                    newRecipeIng[i].splice(i, 1)
                                }
                                console.log(newRecipeIng); 
                            }

                            //set INSTRUCTIONS
                            if(MyRecipes[recipe].instructions != "" || MyRecipes[recipe].instructions != null){
                                for(let i = 0; i < editInsCount - 4; i++){
                                    newRecipeIns[i] = $(`#instruction${i+1}`).val()
                                }
                                console.log(newRecipeIns); 
                            } else if (MyRecipes[recipe].instructions == "" || MyRecipes[recipe].instructions == null || MyRecipes[recipe].instructions == undefined){
                                for(let i = 0; i < editIngCount - 4; i++){
                                    newRecipeIng[i].splice(i, 1)
                                }
                                console.log(newRecipeIns); 
                            }

                            
                                MyRecipes[recipe] = ({
                                    "image":MyRecipes[recipe].image,
                                    "id":newRecipeId,
                                    "name":newRecipeName,
                                    "ingredients":newRecipeIng,
                                    "instructions":newRecipeIns,
                                    "description":newRecipeDes,
                                    "cooktime":newRecipeTime,
                                    "servings":newRecipeServe,
                                })
                                 console.log(MyRecipes[recipe])
                            }
                       
                    }
                    })
                        })
                        

                    })
                }
                $('.viewButton').click(function(e){
                    let view = this.id
                        $.get('./views/viewRecipes/viewRecipes.html', function(data){
                            $('#app').html(data)
                            for(recipe in MyRecipes){
                                if(MyRecipes[recipe].id == view){
                                    console.log(MyRecipes[recipe].id);
                                    $('#viewPageWrapper .descrip-header').empty()
                                    $('#viewPageWrapper .des').empty()
                                    $('#viewPageWrapper .total-time').empty()
                                    $('#viewPageWrapper .servings').empty()
                                    $('#viewPageWrapper .descrip-header').append(`
                                            <h3>${MyRecipes[recipe].name}</h3>
                                        `)
                                    $('#viewPageWrapper .descrip-header').append(`
                                        <div class="img" style="background-image: url(${MyRecipes[recipe].image});"></div>
                                        `)
                                    $('#viewPageWrapper .des').append(`
                                    <div class="description">
                                        <div class="des-title">Description:</div>
                                        <p>${MyRecipes[recipe].description}</p>
                                    </div>

                                    `)
                                    $('#viewPageWrapper .des').append(`
                                        <div class="total-time">
                                            <div>Total Time:</div>
                                            <p>${MyRecipes[recipe].cooktime}</p>
                                        </div>
                                        
                                    `)
                                    $('#viewPageWrapper .des').append(`
                                        <div class="servings">
                                            <div>Servings:</div>
                                            <p>${MyRecipes[recipe].servings}</p>
                                        </div>
                                        
                                    `)
                                    for(let ingredient of MyRecipes[recipe].ingredients){
                                        $('#viewPageWrapper .ing').append(`
                                        <p>${ingredient}</p>
                                        `)
                                    }
                                    let insCount = 1;
                                    for(let instruction of MyRecipes[recipe].instructions){
                                        $('#viewPageWrapper .ins').append(`
                                        <p>${insCount}. ${instruction}</p>
                                        `)
                                        insCount++;
                                    }
                                    $('#viewPageWrapper').append(`
                                    <button class="editBtn" id="${MyRecipes[recipe].id}">Edit Recipe</button>
                                    `)
                                }
                            }

                            $(`.editBtn`).click(function(e){
                                console.log(this.id);
                                let view = this.id;
                                $.get('./views/editRecipes/editRecipes.html', function(data){
                                    $('#app').html(data)
                                    for(recipe in MyRecipes){

                                        if(MyRecipes[recipe].id == view){
                                            $('.editPage .recipe-des').empty();
                                            $('.editPage .recipe-des').append(`
                                                <input type="text" id="recipe-image" placeholder="Add Recipe Image">
                                                <input type="text" id="recipe-name" value="${MyRecipes[recipe].name}">
                                                <input type="text" id="recipe-des" value="${MyRecipes[recipe].description}">
                                                <input type="text" id="recipe-time" value="${MyRecipes[recipe].cooktime}">
                                                <input type="text" id="recipe-serve" value="${MyRecipes[recipe].servings}">
                                                `)
                                            
                                            for(let ingredient of MyRecipes[recipe].ingredients){
                                                $('.editPage .inputs').append(`
                                                    <input type="text" id="ingredient${ingCount}" value="${ingredient}">
                                                `)
                                                ingCount++;
                                            }
                                            for(let instruction of MyRecipes[recipe].instructions){
                                                $('.editPage .inputs2').append(`
                                                <input type="text" id="instruction${insCount}" value="${instruction}">
                                            `)
                                                insCount++;
                                            }
                                            $('.editPage .createWrapper').append(`
                                                <button class="createButton" id="${MyRecipes[recipe].id}">Submit Changes</button>
                                            `)
                                            ingCount = MyRecipes[recipe].ingredients.length + 1;
                                            $('#app #addIngredient').click(function(e){
                                                $('.inputs').append(`<input type="text" id="ingredient${ingCount}" placeholder="ingredient #${ingCount}"></input>`)
                                                ingCount++;
                                                })
                                                //instruction plus button
                                            insCount = MyRecipes[recipe].instructions.length + 1;
                                            $('#app #addInstruction').click(function(e){
                                                $('.inputs2').append(`<input type="text" id="instruction${insCount}" placeholder="instruction #${insCount}"></input>`)
                                                insCount++;
                                                })
                                }
                            
                            }
        
                            // $('.createButton').click(function(e){
                                
                            //     let view2 = this.id;   
                            //     for(recipe in MyRecipes){ 
                                     
                            //         if(view2 == MyRecipes[recipe].id){       
                            //             var recipeName = $('#recipe-name').val()
                            //             var recipeDes = $('#recipe-des').val()
                            //             var recipeTime = $('#recipe-time').val()
                            //             var recipeServe = $('#recipe-serve').val()
                            //             var recipeIngs = []
                            //             var recipeIns = []
                                    

                            //         for(let i = 0; i <= editIngCount2; i++){
                            //             recipeIngs[i] = $(`#ingredient${i+1}`).val()
                            //         }
                            //         for(let i = 0; i <= editInsCount2; i++){
                            //             recipeIns[i] = $(`#instruction${i+1}`).val()
                            //         }
        
                            //         let newRecipeId;
                            //         let newRecipeDes;
                            //         let newRecipeIng = []
                            //         let newRecipeIns = []
                            //         let newRecipeName;
                            //         let newRecipeServe;
                            //         let newRecipeTime;
                                
        
                            //         //set ID
                            //         if(MyRecipes[recipe].id != "" || MyRecipes[recipe].id != null){
                            //             newRecipeId = MyRecipes[recipe].id;
                            //             console.log(newRecipeId); 
                            //         } else if (MyRecipes[recipe].id == "" || MyRecipes[recipe].id == null || MyRecipes[recipe].id == undefined){
                            //             newRecipeId = recipeId;
                            //             recipeId++;
                            //             console.log(newRecipeId); 
                            //         }
        
                            //         //set NAME
                            //         if(MyRecipes[recipe].name != "" || MyRecipes[recipe].name != null){
                            //             newRecipeName = $('#recipe-name').val();
                            //             console.log(newRecipeName); 
                            //         } else if (MyRecipes[recipe].name == "" || MyRecipes[recipe].name == null || MyRecipes[recipe].name == undefined){
                            //             newRecipeName = recipeName;
                            //             console.log(newRecipeName); 
                            //         }
        
                            //         //set DESCRIPTION
                            //         if(MyRecipes[recipe].description != "" || MyRecipes[recipe].description != null){
                            //             newRecipeDes = $('#recipe-des').val();
                            //             console.log(newRecipeDes); 
                            //         } else if (MyRecipes[recipe].description == "" || MyRecipes[recipe].description == null || MyRecipes[recipe].description == undefined){
                            //             newRecipeDes = recipeDes;
                            //             console.log(newRecipeDes); 
                            //         }
        
                            //         //set TIME
                            //         if(MyRecipes[recipe].cooktime != "" || MyRecipes[recipe].cooktime != null){
                            //             newRecipeTime = $('#recipe-time').val();
                            //             console.log(newRecipeTime); 
                            //         } else if (MyRecipes[recipe].cooktime == "" || MyRecipes[recipe].cooktime == null || MyRecipes[recipe].cooktime == undefined){
                            //             newRecipeTime = recipeTime;
                            //             console.log(newRecipeTime); ;
                            //         }
        
                            //         //set SERVE
                            //         if(MyRecipes[recipe].servings != "" || MyRecipes[recipe].servings != null || MyRecipes[recipe].servings){
                            //             newRecipeServe = $('#recipe-serve').val();
                            //             console.log(newRecipeServe); 
                            //         } else if (MyRecipes[recipe].servings == "" || MyRecipes[recipe].servings == null || MyRecipes[recipe].servings == undefined){
                            //             newRecipeServe = recipeServe;
                            //             console.log(newRecipeServe); 
                            //         }
        
                            //         //set 
                            //         for(let i = 0; i <= editIngCount2; i++){
                            //             if($(`#ingredient${i+1}`).val()){
                            //                 if(MyRecipes[recipe].ingredients[i] != "" || MyRecipes[recipe].ingredients[i] != null || MyRecipes[recipe].ingredients[i] == undefined){
                            //                     for(let i = 0; i <= 3; i++){
                            //                         newRecipeIng[i] = $(`#ingredient${i+1}`).val()
                            //                     }
                            //                     console.log(newRecipeIng); 
                            //                 } else if (MyRecipes[recipe].ingredients[i] == "" || MyRecipes[recipe].ingredients[i] == null || MyRecipes[recipe].ingredients[i] == undefined){
                            //                     newRecipeIng[i].splice(i, 1);
                            //                     console.log(newRecipeIng); 
                            //         }}}
        
                            //         //set INSTRUCTIONS
                            //         if(MyRecipes[recipe].instructions != "" || MyRecipes[recipe].instructions != null){
                            //             for(let i = 0; i <= editInsCount2; i++){
                            //                 newRecipeIns[i] = $(`#instruction${i+1}`).val()
                            //             }
                            //             console.log(newRecipeIns); 
                            //         } else if (MyRecipes[recipe].instructions == "" || MyRecipes[recipe].instructions == null || MyRecipes[recipe].instructions == undefined){
                            //             newRecipeIns = recipeIns;
                            //             console.log(newRecipeIns); 
                            //         }
        
                                    
                            //             MyRecipes[recipe] = ({
                            //                 "image":MyRecipes[recipe].image,
                            //                 "id":newRecipeId,
                            //                 "name":newRecipeName,
                            //                 "ingredients":newRecipeIng,
                            //                 "instructions":newRecipeIns,
                            //                 "description":newRecipeDes,
                            //                 "cooktime":newRecipeTime,
                            //                 "servings":newRecipeServe,
                            //             })
                            //              console.log(MyRecipes[recipe])
                            //         }
                            //     editIngCount = 0;
                            //     editInsCount = 0;
                               
                            // }
                            // })
                                })
                                
        
                            })
                        })

                })
            
                } else{
                    $.get('./views/yourRecipes/yourRecipes.html', function(data){
                        $('#app').html(data)
                        $('#app #yourRecipesWrap').append(`
                            <h2 style="margin:100px auto;">please login to continue...</h2>
                        `)
                    })
                    Swal.fire({
                        title: 'sorry...',
                        text: 'you must login to see your recipes',
                        icon: 'warning',
                        confirmButtonText: 'continue'
                      })     
     
                }

            }
            //create a new card for each recipe in the database for browse
            if(view == 'browse'){
                let recipeCount = 0
                for(recipe in Recipes){
                    $('#card-wrapper').append(
                        `<div class="card">
                            <div style="background-image:url(${Recipes[recipe].image})" class="card-img" id="recipe-image${recipeCount}"'></div>
                            <div class="card-text">
                                <h3 id="recipe-title${recipeCount}">${Recipes[recipe].name}</h3>
                                <p id="recipe-description${recipeCount}">${Recipes[recipe].description}</p>
                                <div class="time">
                                    <div class="time-img"></div>
                                    <div id="recipe-time${recipeCount}" class="time-text">${Recipes[recipe].cooktime}</div>
                                </div>
                                <div class="servings">
                                    <div class="servings-img"></div>
                                    <div class="servings-text">${Recipes[recipe].servings}</div>
                                    </div>
                                </div>
                        </div>`  
                                )
                                recipeCount++;
                }
            }



        });
    };

//add ingredient function
    var _addIng = function(){
        $('.inputs').append(`<input type="text" id="ingredient${ingCount}" placeholder="ingredient #${ingCount}"></input>`)
        ingCount++;
    }

//add instruction function
    var _addIns = function(){
        $('.inputs').append(`<input type="text" id="ingredient${ingCount}" placeholder="ingredient #${ingCount}"></input>`)
        ingCount++;
    }

//get view page information and inject...
    var _getViewPage = function(){
            $.get('./views/viewRecipes/viewRecipes.html', function(data){
                $('#app').html(data)
            })
    }

    return{
        getPage: _getPage,
        addIng: _addIng,
        addIns: _addIns,
        getViewPage: _getViewPage,
        loggedIn: this.loggedIn
    }
})();
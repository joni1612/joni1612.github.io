let checkboxClicked = false;
function onCheckboxClicked(){
    const Background = document.getElementById('background-img')
    console.log(Background);
    checkboxClicked = !checkboxClicked;
    console.log(checkboxClicked);
    if(checkboxClicked){
        Background.style.display = 'none';
        
    }else{
        Background.style.display = 'block';
       }
    }
    
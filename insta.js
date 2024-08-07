let availableKeywords = [
    'monkey d luffy',
    'roronoa zoro',
    'vinsmoke snaji',
    'nami',
    'god_d_usopp',
    'tonytony_chopper',
    'nicorobin',
    'superrr_franky',
    'brook__',
    'first_son_of_sea',
    'princess_vivi',
    'portgas_d_ace',
    'bon_channn',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectorInput(this)>"+ list +"<li>"
    });
    resultsBox.innerHTML = "<ul>"+ content.join('') +"<ul>";
}

function selectorInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
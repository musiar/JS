function f1(){
    let arr = JSON.parse('["Коля", "Вася", "Петя"]');
    addTextToElem('r1', arr[2]);
};

function f2(){
    let obj = {a: 'aaa', b: 'bbb'},
        json = JSON.stringify(obj);
    addTextToElem('r2', json);
};

//вспомогательные функции
//вставить текст в абзац с заданным id
function addTextToElem(id, txt){
    document.querySelector('#' + id).innerHTML = txt;
};
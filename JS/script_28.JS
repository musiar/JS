window.addEventListener('load', function()
        {
            var el1 = document.getElementById('r1'),
                addBtn1 = document.getElementById('f1_add_btn'),
                el2 = document.getElementById('r2'),
                addBtn2 = document.getElementById('f2_add_btn');
            el1.addEventListener('click', addText);
            addBtn1.addEventListener('click', addLi);
            el2.addEventListener('click', changeUserName);
            addBtn2.addEventListener('click', addUser);
        }
    )
//1
function addText()
    {
        if(event.target.closest('li'))
            event.target.closest('li').innerHTML += '!';
    };
function addLi()
    {
        var parent = document.getElementById('r1'),
            li = document.createElement('li');
        li.innerHTML = 'пункт';
        parent.appendChild(li);
    }
//2
function addUser()
    {
        var firstname = document.getElementById('firstname'),
            lastname = document.getElementById('lastname'),
            table = document.getElementById('r2');
        if(firstname.value && lastname.value)
            {
                var tr = document.createElement('tr'),
                    td1 = document.createElement('td'),
                    td2 = document.createElement('td');
                td1.innerHTML = lastname.value;
                td2.innerHTML = firstname.value;
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
                firstname.value = '';
                lastname.value = '';
            }
        else 
            alert('Введите обязательные значения!')
    };
function changeUserName(evt)
    {
        if(evt.ctrlKey)
            {
                var updateName = prompt('Введите новое значение', event.target.innerHTML);
                if(updateName)
                    event.target.closest('td').innerHTML = updateName;
            }
    }
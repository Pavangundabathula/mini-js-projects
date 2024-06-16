const result = document.querySelector('.result-value');
let arr2 = [];

let arr1;
arr1 = JSON.parse(localStorage.getItem('arr'));

if (arr1) {
    arr2 = arr1;
    updatecode();
}

function saveToLocalStorage() {
    localStorage.setItem('arr', JSON.stringify(arr2));
}
document.querySelector('.js-add-button').addEventListener('click', () => {
    toadd();
});
function toadd() {
    const p = document.querySelector('.input1todo');
    const q = document.querySelector('.input-date');
    const r = document.querySelector('.input-time');
    const name = p.value;
    const duedate = q.value;
    const duetime = r.value;

    if (name === '' || duedate === '' || duetime === '') {
        alert('Enter all details');
    } else {
        arr2.push({
            name: name,
            duedate: duedate,
            duetime: duetime
        });
        updatecode();
        saveToLocalStorage();
        p.value = '';
        q.value = '';
        r.value = '';
    }
}


function todelete(i) {
    arr2.splice(i, 1);
    updatecode();
    saveToLocalStorage();
}


function updatecode() {
    let todolist = '';
    arr2.forEach((todo,index) =>{
        const { name, duedate, duetime } = todo;
        const html = `<div>${name}</div>
                      <div>${duedate}</div> 
                      <div>${duetime}</div>
                      <button class="result-btn js-delete-button">delete</button>`;
        todolist += html;
    });
    result.innerHTML = todolist;
    document.querySelectorAll('.js-delete-button').forEach((deletebtn,index) => {
        deletebtn.addEventListener('click',() => {
            todelete(index);
        });
    });
}
document.body.addEventListener('keydown',(event) => {
    check(event);
})
function check(event) {
    if (event.key === 'Enter') {
        toadd();
    }
}
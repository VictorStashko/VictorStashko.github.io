let btnPrimary = document.getElementsByClassName('btn-primary')[0];

btnPrimary.addEventListener('click',()=>{
    btnPrimary.style.backgroundColor = '#FFA500';
});

obj = page.evaluate("({foo: 'bar'})")

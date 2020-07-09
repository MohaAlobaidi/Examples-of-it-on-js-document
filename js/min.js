/*global console, document, window, setTimeout*/
/*
    1- document.getElementById('');
    2- document.getElementsByTagName();
    3- document.getElementsByClassName(); no-suport ID 8
    4- document.querySelectorAll(); no-suport ID 8
*/
/* part 3
    document.title;
    document.images;
    document.forms
*/
/* part 4
    document.body
    document.anchors
    document.links
*/
/* part 5
    innerText // no standard
    outerText // no standard
    innerHTML // standard
    outerHTML // standard
    textContent // standard
*/
/* part 6
    changad attribute
    ex: element.attribute = direct method
    ex : aatr.id = 'changing id';
*/
/* part 7
   -get >>> myimage.get.Attribute('src'); show attribute value this is element.
   -set >>> myimage.setAttripute('atteribute name','attripute value').
*/
/* part 8
    - hasAttribute('name attrubite') witch the ex column 82
    - removeAttribute('name attrubite')
*/
/* part 9
    - classList
    - classList.contains('name value') chick in the Element
    - classList.item(index)  selector the item
*/
/* part 10
    - classList addClass removeClass toggelClass
*/
/* part 11
    - childElementCount
    - childNodes
*/
/* part 1
    - children[index]
    - firstElementChild
    - lastElementchild
    - firstChild
    - lastChild
*/
/* part 13
    - appandChild
    - createElement
    - createTextNode
*/
/* part 14
    - insertBefore(name element, neme appand) //look to ex part 14
*/
/* part 15
    - removeChild
    - removeElementChild
*/
/* part 16
    - nodeName nodeValue nodeType
*/
/* part 17
    - nodeclone
*/
/* part 18
    - parentElement
*/
/* part 19
    - nextElementSibling
    - nextSibling
    - previousElementSibling
    - previousSibling
*/
/* part 20
    - focus()
    - blur()
*/
/* part 21
    - click
*/
/* part 22
    - addEventlistener
*/
/* part 23
    - contains
*/
/* part 24
    - client Height and Width
        - viewable area
        - incloud padding
        - no margin
        - no border
        - no scroll
*/
/* part 25
    - scroll Height and Width
        - viewable area
        - incloud padding
        - incloud scroll
        - no margin
        - no border
*/
/* part 26
    - offset Height and Width
        - viewable area
        - incloud padding
        - incloud scroll
        - icloud border
        - no margin
*/
/* part 27
    - scrollingElement.scrollTop
    - on scroll
*/
/* part 28
    - clientLeft
    - clientTop
*/
/* part 29
    - element.style.propetty = 'value';
*/
/* part 30
    - document.inpitEncoding
    - document.lastModified
    - document.URL
*/
/* part 31
    - document.createElement
    - document.createTextNode
    - document.createcomment
*/
/* part 32
    - document.attribute
*/
/* part 33
    - how to write all methods (events)
*/
/* part 34
    - onload
    - onscroll
    - onresize
*/
/* part 35
    - onfocus
    - onblur
    - onsubmit
*/
/* part 36
    - onclick
    - ondbclick
    - oncontextmenu
    - onmouseenter
    - onmouseleave
*/
/* part 37
    - onkeyup
    - onkeypress
    - onkeydown
*/
var Test = document.getElementById('pragraph'),
    tg = document.getElementsByTagName('p'),
    cl = document.getElementsByClassName('sera'),
    qu = document.querySelectorAll('p.query'),
    ti = document.getElementById('title-x'),
    im = document.getElementById('show'),
    i,
    fo = document.getElementById('forx'),
    bod = document.getElementById('bo'),
    ls = document.getElementById('lin'),
    inn = document.getElementById('inr'),
    aatr = document.querySelector('.attrx'),
    rmcl = document.querySelector('.cot'),
    cls = document.getElementById('ghory'),
    cp = document.getElementById('changed-color'),
    ad = document.querySelector('.clickadd'),
    ar = document.querySelector('.clickremove'),
    at = document.querySelector('.clickxtogel'),
    clc = document.querySelector('.chil'),
    cret = document.getElementById('cre'),
    newElement = document.createElement('div'),
    newtext = document.createTextNode('create text in part 13'),
    newlorem = document.createElement('p'),
    cle = document.getElementById('clen'),
    newcl = document.getElementById('new-clen'),
    myclone = cle.firstElementChild.cloneNode(true),
    cpr = document.getElementById('clpr'),
    ne = document.getElementById('ul-li'),
    // int = document.getElementById('my-input'),
    ch = document.getElementById('hi'),
    cbu = document.getElementById('buttona'),
    prc = document.getElementById('prea'),
    vrt = document.getElementById('apcont'),
    contt = document.getElementById('contt'),
    chx = document.getElementById('chx'),
    sto = document.getElementById('sto'),
    scro = document.getElementById('scro'),
    cllt = document.getElementById('cllt'),
    crea = document.getElementById('crea'),
    myElement = document.createElement('div'),
    myText = document.createTextNode('part 20 create element / text / comment'),
    myStartComment = document.createComment('Start comment'),
    myEndtComment = document.createComment('End comment'),
    ulTest = document.getElementById('ul-test'),
    ulcr = document.createElement('ul'),
    crat = document.getElementById('crat'),
    myAttr = document.createAttribute('class'),
    perse = document.getElementById('perse'),
    onev = document.getElementById('onev');
    

Test.innerHTML = "changed by Id";
tg[1].innerHTML = 'changed by TagName'; // [1] index
cl[1].innerHTML = 'chenged by ClassName';
qu[0].innerHTML = 'changed by QuerySelectorAll';
ti.innerHTML = document.title + " " + "changed by document title";
im.innerHTML = document.images.length;
// im.innerHTML = document.images[0].src;

for (i = 0; i < document.images.length; i = i + 1) {
    document.getElementById('sr').innerHTML = document.images[3].src;
    document.querySelector('header').innerHTML = document.images[i].src;
}
// ex part 5
fo.innerText = document.forms.length;
fo.innerText = document.forms[0].x2.value;
fo.innerText = document.forms[0].x2.type;
bod.innerText = document.body.innerText;
if (document.body.innerText.indexOf('body') > -1) {
    // eslint-disable-next-line no-console
    console.log('yed this is body');
}
ls.innerText = document.anchors.length;
ls.innerText = document.links.length;
inn.textContent = 'by ahmed';
aatr.id = 'changing id by javascript'; // attr = id changing id by javascript this is if condeshen
//part 7
// eslint-disable-next-line no-console
console.log(aatr.getAttribute('id'));
document.getElementById('tron').textContent = aatr.getAttribute('id');
document.getElementById('tron').setAttribute('class', 'set-attr');
// part 8
if (aatr.hasAttribute('id')) {
    // eslint-disable-next-line no-console
    console.log(aatr.getAttribute('id'));
} else {
    // eslint-disable-next-line no-console
    console.log(aatr.getAttribute('class')); // no run code bucose // attr = id changing id by javascript this is if condeshen
}
rmcl.removeAttribute('class');
// part 9 ex:>>>>
// eslint-disable-next-line no-console
console.log(cls.classList); // no support IE9
// eslint-disable-next-line no-console
console.log(cls.classList.length); // eslint-disable-next-line no-console
console.log(cls.classList.item(0));
if (cls.classList.contains('mory')) { // eslint-disable-next-line no-console
    console.log('yes found');
}
// part 10 >>>>
ad.onclick = function () {
    'use strict';
    cp.classList.add('color-red');
};
ar.onclick = function () {
    'use strict';
    cp.classList.remove('color-red');
};
at.onclick = function () {
    'use strict';
    cp.classList.toggle('color-red');
};
// EX: part 11 , 12
// eslint-disable-next-line no-console
console.log(clc.childElementCount); // eslint-disable-next-line no-console
console.log(clc.children.length); // eslint-disable-next-line no-console
console.log(clc.children); // eslint-disable-next-line no-console
console.log(clc.children[0]); // eslint-disable-next-line no-console
console.log(clc.children[0].className); // eslint-disable-next-line no-console
console.log(clc.children[1].textContent); // eslint-disable-next-line no-console
console.log(clc.childNodes); // eslint-disable-next-line no-console
console.log(clc.childNodes[5].textContent); // eslint-disable-next-line no-console
console.log(clc.childNodes.length); // eslint-disable-next-line no-console
console.log(clc.firstChild); // eslint-disable-next-line no-console
console.log(clc.firstElementChild); // eslint-disable-next-line no-console
console.log(clc.firstChild); // eslint-disable-next-line no-console
console.log(clc.lastElementChild); // eslint-disable-next-line no-console
console.log(clc.lastChild); // eslint-disable-next-line no-console
// EX: part 13
cret.appendChild(newElement);
newElement.appendChild(newtext);
// EX: part 14
cret.insertBefore(newlorem, cret.childNodes[0]);
// EX: part 15
cret.removeChild(cret.children[2]);
// EX: part 16 
// eslint-disable-next-line no-console
console.log(cret.childNodes[5].nodeName); // eslint-disable-next-line no-console
console.log(cret.childNodes[5].nodeValue); // eslint-disable-next-line no-console
console.log(cret.childNodes[5].nodeType);
// EX: part 17
cle.firstElementChild.cloneNode(true);
newcl.appendChild(myclone);
// EX: 18
cpr.onclick = function () {
    'use strict';
    this.parentElement.classList.add('ron');
};
// EX: 19
ne.childNodes[1].nextElementSibling.classList.add('fot');
ne.childNodes[1].nextSibling.textContent = 'tol';
ne.childNodes[2].previousElementSibling.classList.add('pop');
ne.childNodes[1].previousSibling.textContent = 'jmr';
// EX: 20
window.onload = function () {
    'use strict';
    /* int.focus();
    window.onclick = function () {
        this.blur();
    };*/
    // EX: 21
    ch.onclick = function () {
        this.style.display = 'none';
    };
    setTimeout(function () {
        ch.click();
    }, 5000);
};
// EX: 22
cbu.onclick = function () {
    'use strict';
    prc.style.display = 'none';
};
document.getElementById('buttonb').onclick = function () {
    'use strict';
    cbu.addEventListener('click', function () {
        document.getElementById('preb').style.display = 'none';
    });
};
// EX: 23
if (vrt.contains(contt)) {
    contt.parentElement.classList.add('good');
}
// Ex 24
// eslint-disable-next-line no-console
console.log(chx.clientHeight);// eslint-disable-next-line no-console
console.log(chx.clientWidth);// eslint-disable-next-line no-console
// EX: 25
// eslint-disable-next-line no-console
console.log(chx.scrollHeight);// eslint-disable-next-line no-console
console.log(chx.scrollWidth);
// EX: 26
// eslint-disable-next-line no-console
console.log(chx.offsetHeight);// eslint-disable-next-line no-console
console.log(chx.offsetWidth);
// EX: 27
window.onscroll = function () {
    'use strict';
    if (document.scrollingElement.scrollTop >= 100) {
        sto.classList.add('view');
    } else {
        sto.classList.remove('view');
    }
    scro.onclick = function () {
        document.scrollingElement.scrollTop = 0;
    };
};
// part 28
// eslint-disable-next-line no-console
console.log(cllt.clientLeft + cllt.clientTop);
// EX: part 29
cllt.childNodes[1].style.color = 'red';
// EX: part 30 
// eslint-disable-next-line no-console
console.log(document.inputEncoding);// eslint-disable-next-line no-console
console.log(document.lastModified);// eslint-disable-next-line no-console
console.log(document.URL);
// EX: part 31
crea.append(myStartComment);
crea.append(myElement);
myElement.append(myText);
crea.append(myEndtComment);
// task
ulTest.append(ulcr);
ulTest.childNodes[0].setAttribute('id', 'ux');
// EX: 32
myAttr.value = 'go';
crat.setAttributeNode(myAttr);
// EX: 33
document.getElementById('clax').onclick = function () {
    'use strict';
    document.getElementById('pavan').style.color = 'red';
};
/* function chengeColor() {
    'use strict';
    document.getElementById('pavan').style.color = 'red';
}
document.getElementById('clbx') = chengeColor; */
/*function chengeColor() {
    'use strict';
    document.getElementById('pavan').style.color = 'green';
}*/
// EX: part 34
window.onload = function () {
    'use strict'; // eslint-disable-next-line no-console
    console.log('this is event onload');
};
window.onscroll = function () {
    'use strict'; // eslint-disable-next-line no-console
    console.log('this is event scroll');
};
window.onresize = function () {
    'use strict'; // eslint-disable-next-line no-console
    console.log('this is event onresize');
};
// EX: part 35
onev.onfocus = function () {
    'use strict'; // eslint-disable-next-line no-console
    console.log('this is event onfocus');
};
onev.onblur = function () {
    'use strict'; // eslint-disable-next-line no-console
    console.log('this is event onblur');
};
perse.onsubmit = function (e) {
    'use strict';
    e.preventDefault();// eslint-disable-next-line no-console
    console.log('this is event onsubmit');
};
// EX: part 36
window.ondblclick = function () {
    'use strict'; // eslint-disable-next-line no-console
    console.log('this is event ondblclick');
};
// EX: part 37
onev.onkeypress = function () {
    'use strict';// eslint-disable-next-line no-console
    document.getElementById('grg').textContent = this.value;
};
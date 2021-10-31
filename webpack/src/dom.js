export function dom() {
   
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.append(wrapper);

    const inner = document.createElement('div');
    inner.classList.add('inner')
    wrapper.append(inner);
    const innetText = document.createTextNode('Hello');
    inner.append(innetText);
    const title = document.createElement('h1');
    title.innerHTML = "Title";
    const subtitle = document.createElement('h2');
    subtitle.textContent = "I am subtitle";

    // to the end of element
    inner.append(title);

    // to the start of element
    inner.prepend('Start');

    // before of element
    inner.before('before');

    // can't insert html
    inner.before('<p>before</p>');

    // can insert html
    inner.insertAdjacentHTML('beforebegin','<p>before</p>');

    // after of element
    inner.after('after');

    // replaced element
    title.replaceWith('Replaced element');

    const square = document.querySelector('.square');
    square.textContent = 'I am new text in square';

    // to the start of element
    inner.insertAdjacentHTML('afterbegin','<p>afterbegin</p>');

    // to the end of element
    inner.insertAdjacentHTML('beforeend','<p>beforeend</p>');

    // after of element
    inner.insertAdjacentHTML('afterend','<p>afterend</p>'); // only for html

    inner.insertAdjacentElement('beforeend', subtitle); // only for element

    inner.insertAdjacentText('beforeend', 'some text'); // only for text

    // setTimeout(() => inner.remove(), 1000); //remove element

    const box = document.querySelector('.box');
    const boxClone = box.cloneNode(true);
    const header = document.querySelector('.header');

    header.append(boxClone);

    function getListContent() {
        let fragment = new DocumentFragment();
      
        for(let i=1; i<=3; i++) {
          let li = document.createElement('div');
          li.append(i);
          fragment.append(li);
        }
      
        return fragment;
      }
      
    box.append(getListContent()); // (*)


    const list = document.getElementById('list');
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Привет, мир!';

    // old methods
    // list.appendChild(newLi);
    // list.insertBefore(newLi, list.children[1]);
    // list.insertBefore(newLi, list.firstChild);
    list.replaceChild(newLi, list.firstChild);
    list.removeChild(list.firstChild);


    console.log(document);

    header.classList.add('hader--index');
    //header.classList.remove('hader--index');

    // if (header.classList.contains("hader--index")) {
    //     header.style.border = '1px solid red';
    // }

    // for (let name of header.classList) {
    //     console.log(name);
    // }

    // header.style.cssText=`color: red !important;
    // background-color: yellow;
    // text-align: center;`;

    // header.setAttribute('style', 'color: red');

    console.log(document.body.style.marginTop);

    let headerStyle = getComputedStyle(header);

    console.log(headerStyle.top);

    const example = document.getElementById('example');

    console.log('offsetParent', example.offsetParent);
    console.log('clientTop', example.clientTop);
    console.log('clientLeft', example.clientLeft);
    console.log('clientWidth', example.clientWidth);
    console.log('offsetWidth', example.offsetWidth);
    console.log('offsetLeft', example.offsetLeft);
    console.log('offsetTop', example.offsetTop);
    console.log('clientHeight', example.clientHeight);
    console.log('offsetHeight', example.offsetHeight);
    console.log('scrollHeight', example.scrollHeight);
    
    example.scrollTop  += 45;

    console.log('scrollTop', example.scrollTop);


}
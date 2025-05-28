function increase() {
    let number = document.querySelector('#counter').innerHTML;
    number = parseInt(number) + 1;
    document.querySelector('#counter').innerHTML = number;
}

function displace(element) {
    element.style.position = 'relative';
    element.style.left == '40px' ? element.style.left = '0px': element.style.left = '40px';
}

var btn_no = document.querySelector('#btn_no')

btn_no.addEventListener('mouseenter', function(e) { displace(e.target); });
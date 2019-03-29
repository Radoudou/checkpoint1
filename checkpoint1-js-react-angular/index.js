function masquer_div(hiddendiv) {
    if (document.querySelector('#hiddendiv').style.display == 'block') {
        document.querySelector('#hiddendiv').style.display = 'none';
    }
    else {
        document.querySelector('#hiddendiv').style.display = 'block';
    }
};

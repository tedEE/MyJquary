window.onload = function(e) {


    var inputs = document.querySelectorAll('.check');

    var jqInputs = $('.check');

    jqInputs.on('focus', function() {
        this.classList.add('focus');
    });

    jqInputs.on('blur', function() {
        this.classList.remove('focus');
    });

    // for (let i = 0; i < inputs.length; i++) {
    // 	inputs[i].classList.add('a');
    // }

    $('.item').addClass('some2').html('4').on('click', function () {
    	this.style.color = 'red';
    });

    // jqInputs.removeClass('check');

    // $('.items .item').html('1');
}
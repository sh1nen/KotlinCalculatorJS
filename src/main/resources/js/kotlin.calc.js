if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin.calc'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin.calc'.");
}
this['kotlin.calc'] = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var toString = Kotlin.toString;
  function main$lambda$lambda(closure$numbers, closure$i, closure$screen, closure$output) {
    return function (it) {
      var tmp$;
      var num = (tmp$ = ensureNotNull(closure$numbers[closure$i]).firstChild) != null ? tmp$.nodeValue : null;
      closure$screen.innerHTML = closure$screen.innerHTML + num;
      closure$output.v = closure$screen.innerHTML;
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$screen) {
    return function (it) {
      closure$screen.innerHTML = '';
      return Unit;
    };
  }
  function main$lambda$lambda_1(closure$screen, closure$output, closure$period) {
    return function (it) {
      if (closure$screen.innerHTML === '') {
        closure$output.v = closure$screen.innerHTML + closure$screen.innerHTML.concat('0.');
      }
       else if (closure$screen.innerHTML === closure$output.v) {
        var tmp$ = closure$screen;
        var $receiver = closure$screen.innerHTML;
        var str = closure$period.value;
        tmp$.innerHTML = $receiver.concat(str);
      }
      return Unit;
    };
  }
  function main$lambda$lambda_2(closure$screen, closure$output) {
    return function (it) {
      if (closure$screen.innerHTML === closure$output.v) {
        closure$screen.innerHTML = eval(closure$output.v);
      }
       else {
        closure$screen.innerHTML = '';
      }
      return Unit;
    };
  }
  function main$lambda$lambda_3(closure$zero, closure$screen, closure$output) {
    return function (it) {
      var zeroButtonValue = closure$zero.value;
      if (isBlank(closure$screen.innerHTML)) {
        closure$screen.innerHTML = zeroButtonValue;
        closure$output.v = zeroButtonValue;
      }
       else if (closure$screen.innerHTML === closure$output.v) {
        closure$screen.innerHTML = closure$screen.innerHTML + zeroButtonValue;
        closure$output.v = closure$screen.innerHTML;
      }
      return Unit;
    };
  }
  function main$lambda$lambda_4(closure$operators, closure$i, closure$screen, closure$output) {
    return function (it) {
      var tmp$;
      var operator = (tmp$ = ensureNotNull(closure$operators[closure$i]).firstChild) != null ? tmp$.nodeValue : null;
      if (closure$screen.innerHTML === '') {
        closure$screen.innerHTML = closure$screen.innerHTML.concat('');
      }
       else {
        if (!isBlank(closure$output.v)) {
          var tmp$_0 = closure$screen;
          var $receiver = closure$output.v;
          var str = toString(operator);
          tmp$_0.innerHTML = $receiver.concat(str);
        }
      }
      return Unit;
    };
  }
  function main$lambda(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var zero = Kotlin.isType(tmp$ = document.querySelector('.zero'), HTMLButtonElement) ? tmp$ : throwCCE();
    var period = Kotlin.isType(tmp$_0 = document.querySelector('.period'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var equals = Kotlin.isType(tmp$_1 = document.querySelector('#eqn-bg'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    var delete_0 = Kotlin.isType(tmp$_2 = document.querySelector('#delete'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    var screen = Kotlin.isType(tmp$_3 = document.getElementById('result'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var numbers = document.querySelectorAll('.num');
    var operators = document.querySelectorAll('.operator');
    var output = {v: ''};
    tmp$_4 = numbers.length;
    for (var i = 0; i < tmp$_4; i++) {
      ensureNotNull(numbers[i]).addEventListener('click', main$lambda$lambda(numbers, i, screen, output), false);
    }
    delete_0.addEventListener('click', main$lambda$lambda_0(screen), false);
    period.addEventListener('click', main$lambda$lambda_1(screen, output, period), false);
    equals.addEventListener('click', main$lambda$lambda_2(screen, output), false);
    zero.addEventListener('click', main$lambda$lambda_3(zero, screen, output), false);
    tmp$_5 = operators.length;
    for (var i_0 = 0; i_0 < tmp$_5; i_0++) {
      ensureNotNull(operators[i_0]).addEventListener('click', main$lambda$lambda_4(operators, i_0, screen, output), false);
    }
    return Unit;
  }
  function main(args) {
    window.onload = main$lambda;
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin.calc', _);
  return _;
}(typeof this['kotlin.calc'] === 'undefined' ? {} : this['kotlin.calc'], kotlin);

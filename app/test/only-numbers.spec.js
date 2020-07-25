const expect = require('chai').expect
  , onlyNumbers = require('../../view/assets/js/only-numbers');

describe('OnlyNumbers', function () {
  it('Teste deve retonar somente número', function () {
    expect("15").to.equal(onlyNumbers("z15 r"));
  });
});
/* eslint-env jQuery, es5, es6 */

class Win {
  constructor(winnerFound) {
    this.winnerFound = false;
    this.checkWinPutin = this.checkWinPutin.bind(this);
    this.checkWinTrump = this.checkWinTrump.bind(this);
  }

  checkWinPutin(winnerFound) {
    if  (($('#c1r4').hasClass('putin') && $('#c1r3').hasClass('putin') && $('#c1r2').hasClass('putin')) ||
          ($('#c2r4').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c2r2').hasClass('putin')) ||
          ($('#c3r4').hasClass('putin') && $('#c3r3').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c4r4').hasClass('putin') && $('#c4r3').hasClass('putin') && $('#c4r2').hasClass('putin')) ||
          ($('#c4r2').hasClass('putin') && $('#c4r3').hasClass('putin') && $('#c4r4').hasClass('putin')) ||
          ($('#c3r2').hasClass('putin') && $('#c3r3').hasClass('putin') && $('#c3r4').hasClass('putin')) ||
          ($('#c2r2').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c2r4').hasClass('putin')) ||
          ($('#c1r2').hasClass('putin') && $('#c1r3').hasClass('putin') && $('#c1r4').hasClass('putin')) ||
          ($('#c1r1').hasClass('putin') && $('#c2r1').hasClass('putin') && $('#c3r1').hasClass('putin')) ||
          ($('#c1r2').hasClass('putin') && $('#c2r2').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c1r3').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r3').hasClass('putin')) ||
          ($('#c1r4').hasClass('putin') && $('#c2r4').hasClass('putin') && $('#c3r4').hasClass('putin')) ||
          ($('#c2r1').hasClass('putin') && $('#c3r1').hasClass('putin') && $('#c4r1').hasClass('putin')) ||
          ($('#c2r2').hasClass('putin') && $('#c3r2').hasClass('putin') && $('#c4r2').hasClass('putin')) ||
          ($('#c2r3').hasClass('putin') && $('#c3r3').hasClass('putin') && $('#c4r3').hasClass('putin')) ||
          ($('#c2r4').hasClass('putin') && $('#c3r4').hasClass('putin') && $('#c4r4').hasClass('putin')) ||
          ($('#c1r3').hasClass('putin') && $('#c2r2').hasClass('putin') && $('#c3r1').hasClass('putin')) ||
          ($('#c1r4').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c4r1').hasClass('putin') && $('#c3r2').hasClass('putin') && $('#c2r1').hasClass('putin')) ||
          ($('#c4r4').hasClass('putin') && $('#c3r3').hasClass('putin') && $('#c2r2').hasClass('putin')) ||
          ($('#c1r4').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c2r1').hasClass('putin') && $('#c3r2').hasClass('putin') && $('#c4r1').hasClass('putin')) ||
          ($('#c1r2').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r4').hasClass('putin')) ||
          ($('#c1r1').hasClass('putin') && $('#c2r2').hasClass('putin') && $('#c3r3').hasClass('putin')) ||
          ($('#c1r4').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c4r3').hasClass('putin') && $('#c3r2').hasClass('putin') && $('#c2r1').hasClass('putin')) ||
          ($('#c4r4').hasClass('putin') && $('#c2r2').hasClass('putin') && $('#c3r3').hasClass('putin'))){
      alert('Putin wins!');
      $(alert).makeItRain();
      this.winnerFound = true;
    }
    else {
      this.winnerFound = false;
    }
  }

  checkWinTrump(winnerFound) {
    if  (($('#c1r4').hasClass('trump') && $('#c1r3').hasClass('trump') && $('#c1r2').hasClass('trump')) ||
          ($('#c2r4').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c2r2').hasClass('trump')) ||
          ($('#c3r4').hasClass('trump') && $('#c3r3').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c4r4').hasClass('trump') && $('#c4r3').hasClass('trump') && $('#c4r2').hasClass('trump')) ||
          ($('#c4r2').hasClass('trump') && $('#c4r3').hasClass('trump') && $('#c4r4').hasClass('trump')) ||
          ($('#c3r2').hasClass('trump') && $('#c3r3').hasClass('trump') && $('#c3r4').hasClass('trump')) ||
          ($('#c2r2').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c2r4').hasClass('trump')) ||
          ($('#c1r2').hasClass('trump') && $('#c1r3').hasClass('trump') && $('#c1r4').hasClass('trump')) ||
          ($('#c1r1').hasClass('trump') && $('#c2r1').hasClass('trump') && $('#c3r1').hasClass('trump')) ||
          ($('#c1r2').hasClass('trump') && $('#c2r2').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c1r3').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r3').hasClass('trump')) ||
          ($('#c1r4').hasClass('trump') && $('#c2r4').hasClass('trump') && $('#c3r4').hasClass('trump')) ||
          ($('#c2r1').hasClass('trump') && $('#c3r1').hasClass('trump') && $('#c4r1').hasClass('trump')) ||
          ($('#c2r2').hasClass('trump') && $('#c3r2').hasClass('trump') && $('#c4r2').hasClass('trump')) ||
          ($('#c2r3').hasClass('trump') && $('#c3r3').hasClass('trump') && $('#c4r3').hasClass('trump')) ||
          ($('#c2r4').hasClass('trump') && $('#c3r4').hasClass('trump') && $('#c4r4').hasClass('trump')) ||
          ($('#c1r3').hasClass('trump') && $('#c2r2').hasClass('trump') && $('#c3r1').hasClass('trump')) ||
          ($('#c1r4').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c4r1').hasClass('trump') && $('#c3r2').hasClass('trump') && $('#c2r1').hasClass('trump')) ||
          ($('#c4r4').hasClass('trump') && $('#c3r3').hasClass('trump') && $('#c2r2').hasClass('trump')) ||
          ($('#c1r4').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c2r1').hasClass('trump') && $('#c3r2').hasClass('trump') && $('#c4r1').hasClass('trump')) ||
          ($('#c1r2').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r4').hasClass('trump')) ||
          ($('#c1r1').hasClass('trump') && $('#c2r2').hasClass('trump') && $('#c3r3').hasClass('trump')) ||
          ($('#c1r4').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c4r3').hasClass('trump') && $('#c3r2').hasClass('trump') && $('#c2r1').hasClass('trump')) ||
          ($('#c4r4').hasClass('trump') && $('#c2r2').hasClass('trump') && $('#c3r3').hasClass('trump'))){
        alert('Trump wins!');
        $(alert).makeItRain();
        this.winnerFound = true;
    }  else {
      this.winnerFound = false;
    }
  }
}

let winFun = new Win();
// $('button').click(function() {
//   $('trump').removeAttr('class', 'trump');
// });

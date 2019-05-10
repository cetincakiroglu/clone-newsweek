window.onscroll = function(e) {
  if (window.innerWidth >= 992) {
    if (this.oldScroll > this.scrollY) {
      document.getElementById("header1").style.display = "block";
      document.getElementById("header2").style.display = "none";
    } else {
      document.getElementById("header1").style.display = "none";
      document.getElementById("header2").style.display = "block";
    }
  } else {
    if (this.oldScroll > this.scrollY) {
      document.getElementById("header2").style.position = "fixed";
      document.getElementById("header2").style.zIndex = "99";
      document.getElementById("header2").style.top = "0";
      document.getElementById("main-section1").style.marginTop = "30px";
    } else {
      document.getElementById("header2").style.position = "fixed";
      document.getElementById("header2").style.top = "-40px";
    }
  }

  // console.log(this.scrollY);

  this.oldScroll = this.scrollY;
};

window.onresize = function() {
  if (window.innerWidth < 992) {
    document.getElementById("header1").style.display = "none";
    document.getElementById("header2").style.display = "block";
  } else {
    document.getElementById("header1").style.display = "block";
    document.getElementById("header2").style.display = "none";
  }
};

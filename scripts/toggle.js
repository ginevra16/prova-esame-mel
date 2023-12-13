function toggleActive(el) {
    if (el.classList.contains('active')) {
        el.classList.remove('active');
        document.getElementById("mySidenav").style.height = "0";
    } else {
        el.classList.add('active');
        document.getElementById("mySidenav").style.height = "100%";
    }
}

document.getElementById('hamburgerBtn').addEventListener('click', function () {
    var nav = document.getElementById('navBar');
    if (window.innerWidth <= 700) {
        nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
    }
});

window.addEventListener('resize', function () {
    var nav = document.getElementById('navBar');
    if (window.innerWidth > 700) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});

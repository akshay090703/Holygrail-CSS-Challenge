const navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click', function () {
    const outerGrid = document.querySelector('.outer-grid');
    outerGrid.classList.toggle('outer-grid-expanded');
    // adds and removes the class when the event takes place

    const nav = document.querySelector('nav');
    nav.classList.toggle('hide-nav');
})
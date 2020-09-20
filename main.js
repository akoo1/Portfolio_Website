3
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
    // -- Responsive nav bar --
    document.getElementsByClassName('nav-bar__link--hamburger')[0].addEventListener('click', hamburger_clicked)
    // Another way to select elements
    // document.querySelector('.hamburger').addEventListener('click', hamburger_clicked)

    function hamburger_clicked() {
        var x = document.getElementById('my-nav-bar')

        if (!x.classList.contains('responsive')) {
            x.classList.add('responsive')
        } else {
            x.classList.remove('responsive')
        }
    }
    console.log('GGoby')
    // -- Add new class name to nav bar when scroll down --
    window.addEventListener('scroll', function () {
        var nav_bar = document.querySelector('.nav-bar')
        nav_bar.classList.toggle('sticky', window.scrollY > 0)
    })

}
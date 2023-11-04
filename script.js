document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(function (link, index) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            tabContents.forEach(function (content) {
                content.style.display = 'none';
            });

            tabContents[index].style.display = 'block';
        });
    });
});

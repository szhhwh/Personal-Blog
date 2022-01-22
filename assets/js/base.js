function totop() {
    scrollTo(0, 0);
}

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 180,
    isFitWidth: true
});
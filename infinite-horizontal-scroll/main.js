const scrollers = document.querySelectorAll(".scroller");

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated',true);

        const scrollerInner = scroller.querySelector('.scroller_inner');
        const scrollerInnerContent = Array.from(scrollerInner.children);

        scrollerInnerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);

            scrollerInner.appendChild(duplicatedItem);
        }) 
    });
}

//if false 
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}



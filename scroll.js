function activatescrolligation() {
    const sections = document.querySelectorAll(".section");
    const scrollContainer = document.createElement("div");
    const scrollItems = Array.from(sections).map((section) => {
        return `       
                        <div class="scroll-item" data-for-section="${section.id}">
                            <a href="#${section.id}" class="scroll-link"></a>
                        </div>
                    
                      <a class="scroll-label" data-for-section="${section.id}">${section.dataset.label}</a>
                  `;
    });

    scrollContainer.classList.add('scroll')
    scrollContainer.innerHTML = scrollItems.join("");

    document.body.append(scrollContainer);

}

activatescrolligation();

$(document).ready(function () {
    let link = $('.scroll-link');
    let navbar = $('.navigate-btn');
    let sidebar = $('.sidebar-navigate-btn');
    let top = $(window).scrollTop();
    $('.section').each(function () {
        let id = $(this).attr('id');
        let height = $(this).height();
        let offset = $(this).offset().top - 100;
        if (top >= offset && top < offset + height) {
            link.removeClass('scroll-link-selected');
            navbar.removeClass('selected');
            sidebar.removeClass('selected');
            const found = $('.scroll').find(`[data-for-section="${id}"]`)
            const found2 = $('.nav-navigates').find(`[data-for-section="${id}"]`)
            const found3 = $('.sidebar').find(`[data-for-section="${id}"]`)
            if (found[0].classList.contains("scroll-item")) {
                $(found[0]).children('.scroll-link').addClass('scroll-link-selected');
            }
            if (found2[0].classList.contains("navigate-btn")) {
                $(found2[0]).addClass('selected');
            }
            if (found3[0].classList.contains("sidebar-navigate-btn")) {
                $(found3[0]).addClass('selected');
            }
        }

        //check if the bottom has reached the last section

        if ($(window).scrollTop() + window.innerHeight > $(document).height() - 50) {
            link.removeClass('scroll-link-selected');
            navbar.removeClass('selected');
            sidebar.removeClass('selected');
            const found = $('.scroll').find(`[data-for-section="kapcsolat"]`)
            const found2 = $('.nav-navigates').find(`[data-for-section="kapcsolat"]`)
            const found3 = $('.sidebar').find(`[data-for-section="kapcsolat"]`)
            if (found[0].classList.contains("scroll-item")) {
                $(found[0]).children('.scroll-link').addClass('scroll-link-selected');
            }
            if (found2[0].classList.contains("navigate-btn")) {
                $(found2[0]).addClass('selected');
            }
            if (found3[0].classList.contains("sidebar-navigate-btn")) {
                $(found3[0]).addClass('selected');
            }
        }
    });
    //get the current section when the page loads
    $(window).on('scroll', function () {
        let link = $('.scroll-link');
        let navbar = $('.navigate-btn');
        let sidebar = $('.sidebar-navigate-btn');
        let top = $(window).scrollTop();
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();

        $('.section').each(function () {
            let id = $(this).attr('id');
            let height = $(this).height();
            let offset = $(this).offset().top - 100;
            if (top >= offset && top < offset + height) {
                link.removeClass('scroll-link-selected');
                navbar.removeClass('selected');
                sidebar.removeClass('selected');
                const found = $('.scroll').find(`[data-for-section="${id}"]`)
                const found2 = $('.nav-navigates').find(`[data-for-section="${id}"]`)
                const found3 = $('.sidebar').find(`[data-for-section="${id}"]`)
                if (found[0].classList.contains("scroll-item")) {
                    $(found[0]).children('.scroll-link').addClass('scroll-link-selected');
                }
                if (found2[0].classList.contains("navigate-btn")) {
                    $(found2[0]).addClass('selected');
                }
                if (found3[0].classList.contains("sidebar-navigate-btn")) {
                    $(found3[0]).addClass('selected');
                }
            }

            //check if the bottom has reached the last section

            if ($(window).scrollTop() + window.innerHeight > $(document).height() - 50) {
                link.removeClass('scroll-link-selected');
                navbar.removeClass('selected');
                sidebar.removeClass('selected');
                const found = $('.scroll').find(`[data-for-section="kapcsolat"]`)
                const found2 = $('.nav-navigates').find(`[data-for-section="kapcsolat"]`)
                const found3 = $('.sidebar').find(`[data-for-section="kapcsolat"]`)
                if (found[0].classList.contains("scroll-item")) {
                    $(found[0]).children('.scroll-link').addClass('scroll-link-selected');
                }
                if (found2[0].classList.contains("navigate-btn")) {
                    $(found2[0]).addClass('selected');
                }
                if (found3[0].classList.contains("sidebar-navigate-btn")) {
                    $(found3[0]).addClass('selected');
                }
            }
        });
    });
});
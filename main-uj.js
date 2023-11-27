const togglenav = () => {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".nav-hamburger");
    const blur = document.querySelector(".blur");

    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        sidebar.style.width = "0px";
        hamburger.src = "./public/hamburger.png"
        blur.classList.remove("active");
    }
    else if (!sidebar.classList.contains("active")) {
        sidebar.classList.add("active");
        sidebar.style.width = "292px";
        hamburger.src = "./public/close.png";
        blur.classList.add("active");
    }

}

const openquestion = (e) => {
    const element = e.parentElement;
    const img = e.children[0]
    const questionopen = e.parentElement.children[1]
    expandElement(questionopen, 'active');
    if (questionopen.classList.contains("active")) {
        img.style.webkitTransform = "rotate(-90deg)"
        //set the border radius on the bottom to 0
        e.style.borderRadius = "7px 7px 0px 0px"
    }
    else if (!questionopen.classList.contains("active")) {
        img.style.transform = "rotate(90deg)"
        e.style.borderRadius = "7px 7px 7px 7px"
    }
}


$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $(".navbar").css("backdrop-filter", "blur(25px)");
            $(".navbar").css("background-color", "rgba(27, 27, 27, 0.2");
        }
        if ($(window).scrollTop() < 1) {
            $(".navbar").css("backdrop-filter", "blur(0px)");
            $(".navbar").css("background-color", "transparent");
        }
    })
})

$(document).ready(function () {
    // if screen width is larger than 1205 px then the sidebar is hidden and the class is removed
    if (screen.width > 1205) {
        $(".sidebar").removeClass("active");
        $(".sidebar").width("0px");
    }
})

$(document).ready(function () {
    $('.scroll-link').hover(
        function () {
            const hoveredelment = $(this).parent();
            const section = hoveredelment.attr("data-for-section");
            const label = $('.scroll-label[data-for-section="' + section + '"]');
            label.addClass("selected");
            /*const styleelement = hoveredelment.parent()
            $(styleelement).css('background-color', '#353535');
            $(styleelement).css('width', '5px');
            $('.scroll-item').css('width', '15px');
            $(styleelement).css('height', '160px');
            $(styleelement).css('border-radius', '93px');
            $(styleelement).css('right', '10px');*/
        },
        function () {
            const hoveredelment = $(this).parent()
            const section = hoveredelment.attr("data-for-section");
            const label = $('.scroll-label[data-for-section="' + section + '"]');
            label.removeClass("selected");
            /*const styleelement = hoveredelment.parent()
            $(styleelement).css('background-color', 'transparent');*/
        }
    )
})

function devHover() {
    $('.developer').hover(
        function () {
            $(this).addClass('active');
        }
        , function () {
            $(this).removeClass('active');
            $(this).addClass('closing')
            setTimeout(() => {
                $(this).removeClass('closing')
            }, 400);
        }
    );
}

$(document).ready(function () {
    //put the 4 elements after the last chilh of developer
    const developer = $('.developer:last-child');
    const html = $(`
    <div class="developer">
    <img src="public/users/Dempy.png">
    <div class="hover">
        <div class="name">
            <a>Dempy</a>
        </div>
    </div>
</div>
<div class="developer">
    <img src="public/users/Peti.png">
    <div class="hover">
        <div class="name">
            <a>Peti</a>
        </div>
    </div>
</div>
<div class="developer">
    <img src="public/users/dave.png">
    <div class="hover">
        <div class="name">
            <a>davevagyok</a>
        </div>
    </div>
</div>
<div class="developer">
    <img src="public/users/Exatom.png">
    <div class="hover">
        <div class="name">
            <a>ExAtom</a>
        </div>
    </div>
</div>
    `)

    $('.developers-show-more').click(function () {
        const text = $(this).children('a').text()
        if (text == 'Még több mutatása') {
            $(this).children('a').text('Kevesebb mutatása')
            developer.after(html);
        } else if (text == 'Kevesebb mutatása') {
            $(this).children('a').text('Még több mutatása')
            //remove the last four elements after develper
            $('.developer:last-child').remove();
            $('.developer:last-child').remove();
            $('.developer:last-child').remove();
            $('.developer:last-child').remove();
        }
        devHover();
    })

})

$(document).ready(function () {
    $('.developer').hover(
        function () {
            $(this).addClass('active');
        }
        , function () {
            $(this).removeClass('active');
            $(this).addClass('closing')
            setTimeout(() => {
                $(this).removeClass('closing')
            }, 400);
        }
    );
})


function expandElement(elem, collapseClass) {
    // debugger;
    elem.style.height = '';
    elem.style.transition = 'none';
    elem.children[0].style.opacity = '';
    elem.style.backgroundColor = '';

    const startHeight = window.getComputedStyle(elem).height;
    const startOpacity = window.getComputedStyle(elem.children[0]).opacity;
    const startBackgroundColor = window.getComputedStyle(elem).backgroundColor;

    // Remove the collapse class, and force a layout calculation to get the final height
    elem.classList.toggle(collapseClass);
    const height = window.getComputedStyle(elem).height;
    const opacity = window.getComputedStyle(elem.children[0]).opacity;
    const backgroundColor = window.getComputedStyle(elem).backgroundColor;


    // Set the start height to begin the transition
    elem.style.height = startHeight;
    elem.children[0].style.opacity = startOpacity;
    elem.style.backgroundColor = startBackgroundColor;

    // wait until the next frame so that everything has time to update before starting the transition
    requestAnimationFrame(() => {
        elem.style.transition = '';


        requestAnimationFrame(() => {
            elem.style.height = height
            elem.children[0].style.opacity = opacity;
            elem.style.backgroundColor = backgroundColor;
        })
    })

    // Clear the saved height values after the transition
    elem.addEventListener('transitionend', () => {
        elem.style.height = '';
        elem.removeEventListener('transitionend', arguments.callee);
    });
}
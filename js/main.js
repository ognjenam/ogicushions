window.onload = (() => {

    document.querySelector("#contactSubmit").addEventListener("click", checkValues)
});
const checkValues = () => {
    var t = document.querySelector("#tbName"),
        e = document.querySelector("#tbEmail"),
        a = document.querySelector("#tbMessage"),
        s = document.querySelector("#errorName"),
        n = document.querySelector("#errorMail"),
        c = document.querySelector("#errorMessage");
    "" != t && /^[A-Z][a-z]{3,}(\s[A-Z][a-z]{3,})*$/.test(t.value) ? s.innerHTML = "" : s.innerHTML = "Please supply valid name!", "" != e && /^[A-z\d]{2,}(\.?(\W\D)?[A-z\d]{2,})*\@\w{2,}(\.\w{2,})*$/.test(e.value) ? n.innerHTML = "" : n.innerHTML = "Please supply valid e-mail!", "" != a && /[\w\d\W\D\s]{10,}/.test(a.value) ? c.innerHTML = "" : c.innerHTML = "Please supply valid message!"
};
$(document).ready(() => {

    $(".showAboutMe").click(function() {
        var t = $(this).attr("id");
        $("#modal-container").removeAttr("class").addClass(t), $("body").addClass("modal-active")
    }), $("#modal-container").click(function() {
        $(this).addClass("out"), $("body").removeClass("modal-active")
    }), $(".box img").first().addClass("active"), $(".box img").hide(), $(".active").show(), $(".boxText").first().addClass("activeText"), $(".boxText").hide(), $(".activeText").show(), $("#oneForward").click(() => {
        $(".active").removeClass("active").addClass("oldActive"), $(".oldActive").is(":last-child") ? $(".box img").first().delay(400).addClass("active") : $(".oldActive").next().delay(400).addClass("active"), $(".oldActive").removeClass("oldActive"), $(".box img").fadeOut("fast", function() {
            $(".active").fadeIn(400)
        }), $(".activeText").removeClass("activeText").addClass("oldActiveText"), $(".oldActiveText").is(":last-child") ? $(".boxText").first().delay(400).addClass("activeText") : $(".oldActiveText").next().delay(400).addClass("activeText"), $(".oldActiveText").removeClass("oldActiveText"), $(".boxText").fadeOut("fast", function() {
            $(".activeText").fadeIn(400)
        })
    }), $("#oneBehind").click(() => {
        $(".active").removeClass("active").addClass("oldActive"), $(".oldActive").is(":first-child") ? $(".box img").last().delay(400).addClass("active") : $(".oldActive").prev().delay(400).addClass("active"), $(".oldActive").removeClass("oldActive"), $(".box img").fadeOut("fast", function() {
            $(".active").fadeIn(400)
        }), $(".activeText").removeClass("activeText").addClass("oldActiveText"), $(".oldActiveText").is(":first-child") ? $(".boxText").last().delay(400).addClass("activeText") : $(".oldActiveText").prev().delay(400).addClass("activeText"), $(".oldActiveText").removeClass("oldActiveText"), $(".boxText").fadeOut("fast", function() {
            $(".activeText").fadeIn(400)
        })
    }), $("#returnToTop").click(() => ($("html, body").animate({
        scrollTop: 0
    }, 1e3), !1))
}), $(document).ready(() => {
    $(document).on("click", 'a[href^="#"]', function(t) {
        t.preventDefault(), $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 1e3)
    }), $(".navbar-firstnav li").click(function() {
        $(".aktivan").removeClass("aktivan").addClass("link1"), $(this).addClass("aktivan").removeClass("link1")
    })
}), $(document).ready(() => {
    e(), $.ajax({
        url: "data/categories.json",
        method: "GET",
        dataType: "JSON",
        success: a => {
            var s = "";
            for (var n of(s += '\n\t\t\t\t\t<div id="categoriesDiv">\n\t\t\t\t\t\t<a  class="menu-category">\n\t\t\t\t\t\t<h3 id="category-title">Choose</h3>\n\t\t\t\t\t\t<ul id="category-dropdown">', a)) s += `\n\t\t\t\t\t\t\t<li data-id="${n.id}">${n.name}</li>\n\t\t\t\t\t\t\t`;
            s += "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t", document.querySelector("#categoriesWrapper").innerHTML = s, $("#category-dropdown li").click(function() {
                Number($(this).data("id")) ? t($(this).data("id")) : e()
            }), $("#category-title").click(function() {
                e()
            })
        },
        error: (t, e, a) => {
            console.log(a)
        }
    });
    const t = t => {
        $.ajax({
            url: "data/products.json",
            method: "GET",
            dataType: "JSON",
            success: e => {
                e = e.filter(e => e.categoryId == t), a(e)
            },
            error: (t, e, a) => {
                console.log(a)
            }
        })
    };

    function e() {
        $.ajax({
            url: "data/products.json",
            method: "GET",
            dataType: "JSON",
            success: t => {
                a(t)
            },
            error: (t, e, a) => {
                console.log(a)
            }
        })
    }
    $("#btnPriceSort").click(() => {
        $.ajax({
            url: "data/products.json",
            method: "GET",
            dataType: "JSON",
            success: t => {
                t.sort((t, e) => t.price == e.price ? 0 : t.price > e.price ? -1 : 1), a(t)
            },
            error: (t, e, a) => {
                console.log(a)
            }
        })
    }), $("#btnNameSort").click(() => {
        $.ajax({
            url: "data/products.json",
            method: "GET",
            dataType: "JSON",
            success: t => {
                t.sort((t, e) => t.name == e.name ? 0 : t.name > e.name ? 1 : -1), a(t)
            },
            error: (t, e, a) => {
                console.log(a)
            }
        })
    });
    const a = t => {

        var e = "";
        for (var a of t) e += `\n\t\t\t<div class="collection-item" >\n\n\t\t\t\t<a  class="inlineBlock">\n\t\t\t\t\t <img src="${a.image.src}"  alt="${a.image.alt}">`, a.sale && (e += '<div class="product_details text-center">\n\t\t\t\t\t\t\t\t<span class="sale">Sale</span>\n\t\t\t\t\t\t </div>'), e += `\n\t\t\t\t</a>\n\n\t\t\t\t<div class="itemDetails">\n\t\t\t\t\t <a href="#">${a.name}</a>\n\t\t\t\t\t <div class="itemDetailsPrice">\n\t\t\t\t\t\t\t<p>$${a.price}</p>\n\t\t\t\t\t </div>\n\t\t\t\t\t <p class="details">${a.information}</p>\n\t\t\t\t\t <div class="itemColour">\n\t\t\t\t\t\t\t<span class="colourStyle colourBackground">Colour: </span>\n\t\t\t\t\t\t\t<span class="colourStyle">${a.colour}</span>\n\t\t\t\t\t </div>\n           <div class="wrapper" >\n     <a href = ""  class="button-cart" >\n      <div class="circle">\n        <div class="icon icon-cart">\n          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 459.529 459.529" style="enable-background:new 0 0 459.529 459.529;" xml:space="preserve">\n            <g>\n              <path d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2\n              l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17\n              s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17\n              S7.65,55.231,17,55.231z"/>\n              <path d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764\n              S114.183,438.298,135.433,438.298z"/>\n              <path d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05\n              c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083\n              C339.433,422.431,356.15,438.298,376.267,438.298z"/>\n            </g>\n          </svg>\n        </div>\n\n        <div class="icon icon-checkmark">\n          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">\n            <g>\n              <path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0\n            c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136\n            C513.921,95.666,513.921,83.198,506.231,75.508z"/>\n            </g>\n          </svg>\n        </div>\n      </div>\n\n      <span class="button-bg" data-id="${a.id}">\n        <span class="text text-before">Add to cart</span>\n        <span class="text text-after">Added to cart</span>\n      </span>\n     </a>\n     </div>\n\n\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t`;
        document.querySelector(".flexGrid").innerHTML = e, $(".button-bg").click(n)
    };
    //const s = () => JSON.parse(localStorage.getItem("products"));



    function n() {
        // let t = $(this).data("id");
        // var e = s();
        // e ? e.filter(e => e.id == t).length ? function() {
        //     let e = s();
        //     for (let a in e)
        //         if (e[a].id == t) {
        //             e[a].quantity++;
        //             break
        //         }
        //     localStorage.setItem("products", JSON.stringify(e))
        // }() : function() {
        //     let e = productsInCart();
        //     e.push({
        //         id: t,
        //         quantity: 1
        //     }), localStorage.setItem("products", JSON.stringify(e))
        // }() : function() {
        //     let e = [];
        //     e[0] = {
        //         id: t,
        //         quantity: 1
        //     }, localStorage.setItem("products", JSON.stringify(e))
        // }()
    }
}), $(document).ready(function() {
    $("body div:last").css("display", "none")
});


// =============================
// ADD TO CART BUTTONS
// =============================

const addCartButtons =
    document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {

    button.addEventListener("click", function () {

        const productCard =
            this.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        alert(productName + " added to cart!");

        const originalText = this.textContent;

        this.textContent = "Added ✓";

        this.disabled = true;

        setTimeout(() => {

            this.textContent = originalText;

            this.disabled = false;

        }, 1500);

    });

});



// =============================
// CATEGORY BUTTONS
// =============================

const categoryButtons =
    document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        const categoryCard =
            this.closest(".category-card");

        const categoryName =
            categoryCard.querySelector("h3").textContent;

        alert(
            "Opening " +
            categoryName +
            " products."
        );

    });

});



// =============================
// PROMOTION BUTTON
// =============================

const offerButton =
    document.getElementById("offerButton");

offerButton.addEventListener("click", function () {

    const productsSection =
        document.getElementById("products");

    productsSection.scrollIntoView({
        behavior: "smooth"
    });

});



// =============================
// LEARN MORE
// =============================

const learnMoreBtn =
    document.getElementById("learnMoreBtn");

learnMoreBtn.addEventListener("click", function () {

    alert(
        "Happy Toys provides safe, educational and creative toys for children."
    );

});



// =============================
// VIEW ALL PRODUCTS
// =============================

const viewProductsButton =
    document.querySelector(
        ".view-products-btn"
    );

viewProductsButton.addEventListener(
    "click",
    function () {

        alert(
            "This button can be connected to your products page."
        );

    }
);



// =============================
// NEWSLETTER
// =============================

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );

const emailInput =
    document.getElementById(
        "emailInput"
    );

const newsletterMessage =
    document.getElementById(
        "newsletterMessage"
    );


newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const email =
            emailInput.value.trim();

        if (email === "") {

            newsletterMessage.textContent =
                "Please enter your email address.";

            return;

        }

        newsletterMessage.textContent =
            "Thank you! You have successfully subscribed.";

        emailInput.value = "";

    }
);



// =============================
// PRODUCT CARD ANIMATION
// =============================

const productCards =
    document.querySelectorAll(
        ".product-card"
    );

const observerOptions = {
    threshold: 0.15
};

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-product"
                    );

                }

            });

        },
        observerOptions
    );


productCards.forEach(card => {

    observer.observe(card);

});

(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");

        document.body.classList.toggle("menu-open")
    });


})();


//   const refs = {
//     openMenuBtn: document.querySelector('.open-menu-btn'),
//     closeMenuBtn: document.querySelector('.close-menu-btn'),
//     menu: document.querySelector('.mob-menu'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//   }
const anchorController = () => {
    const btn = document.querySelector(".js-back-to-top")! as HTMLButtonElement;
    const links = document.querySelectorAll(".js-section-link a")! as NodeListOf<HTMLAnchorElement>;
    const sections = document.querySelectorAll(".js-section")! as NodeListOf<HTMLElement>;
    const navigation = document.querySelector("#navigation")! as HTMLDivElement;

    const getSectionOffset = (section: HTMLElement) => section.offsetTop - 60;

    const scrollToTarget = (element: HTMLElement, top: number) => {
        if (!element) return;
        element.addEventListener("click", (e: Event) => {
            e.preventDefault();
            window.scrollTo({
                top,
                left: 0,
                behavior: "smooth",
            });
            if (navigation.classList.contains("navigation--mobile-active")) {
                navigation.classList.remove("navigation--mobile-active");
            }
        });
    };

    const updateOffsets = () => {
        links.forEach((link) => {
            const dataName = link.parentElement.getAttribute("data-name");
            sections.forEach((section) => {
                const sectionID = section.id;

                if (dataName === sectionID) {
                    scrollToTarget(link, getSectionOffset(section));
                }
            });
        });
    };

    updateOffsets();
    scrollToTarget(btn, 0);

    window.addEventListener("resize", () => {
        updateOffsets();
    });
};

export default anchorController;

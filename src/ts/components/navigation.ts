const navigation = () => {
  const siteNavigation = document.getElementById("navigation") as HTMLElement;
  const mobileNavTrigger = document.getElementById(
    "navigation-header-mobile-toggle"
  ) as HTMLElement;
  const mobileNavTriggerTitle = document.getElementById(
    "navigation-header-mobile-toggle-title"
  ) as HTMLElement;
  const submenuToggleButtons = document.querySelectorAll(
    ".navigation-menu__submenu-toggle"
  ) as NodeListOf<HTMLElement>;
  let mobileMenuOpen = false;

  // Mobile Menu Toggle Active
  const toggleMobileActive = () => {
    mobileMenuOpen = !mobileMenuOpen;
    siteNavigation.classList.toggle("navigation--mobile-active");
    mobileNavTriggerTitle.innerHTML = mobileMenuOpen ? "Close" : "Menu";
  };

  // Toggle Submenu Elements
  const toggleSubmenuActive = (submenuParent: HTMLElement) => {
    submenuParent.classList.toggle("navigation-menu__item--submenu-active");
  };

  // Adding Event Listeners to Touch and Click Events
  const customEventListener = (element: HTMLElement, functionCall: EventListener) => {
    if (typeof window.ontouchstart === "undefined") {
      element.addEventListener("click", functionCall);
    } else {
      element.addEventListener("touchstart", functionCall);
    }
  };

  // Set Sticky Navigation on Scroll
  const setStickyNav = (currentScroll: number) => {
    if (currentScroll > 0) {
      siteNavigation.classList.add("navigation--sticky");
    } else {
      siteNavigation.classList.remove("navigation--sticky");
    }
  };

  // Add Event Listener to Window to Check if Navigation Has Scrolled
  const handleScroll = () => {
    const currentScroll = document.scrollingElement
      ? document.scrollingElement.scrollTop
      : document.documentElement.scrollTop;

    setStickyNav(currentScroll);
  };

  // Initialize Mobile Menu Toggle Event
  customEventListener(mobileNavTrigger, toggleMobileActive);

  // Initialize Submenu Toggle Event
  submenuToggleButtons.forEach((button) => {
    customEventListener(button, () => {
      const submenuParent = button.closest(".navigation-menu__item--has-submenu") as HTMLElement;
      if (submenuParent) {
        toggleSubmenuActive(submenuParent);
      }
    });
  });

  // Add Event Listener to Window to Check if Navigation Has Scrolled
  window.addEventListener("scroll", handleScroll);
};

export default navigation;

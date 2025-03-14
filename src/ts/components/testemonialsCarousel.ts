import Glide from "@glidejs/glide";

const testemonialsCarousel = () => {
  const minTwoDigits = (n: number): string => (n < 10 ? "0" : "") + n;

  // If needed, init counter values
  const initCountValues = (
    totalCount: number,
    $currentItemContainer: HTMLElement,
    $totalItemsContainer: HTMLElement
  ) => {
    $currentItemContainer.innerHTML = "01";
    $totalItemsContainer.innerHTML = minTwoDigits(totalCount);
  };

  // Adding Event Listeners to Touch and Click Events
  const customEventListener = (element: HTMLElement, functionCall: EventListener) => {
    const eventType = typeof window.ontouchstart === "undefined" ? "click" : "touchstart";
    element.addEventListener(eventType, functionCall);
  };

  const testimonialsCarousel = document.getElementById(
    "testimonials-carousel"
  ) as HTMLElement | null;
  const testimonialsCurrentItemContainer = document.getElementById(
    "testimonials-carousel-nav-pagination-count-current"
  ) as HTMLElement;
  const testimonialsTotalItemsContainer = document.getElementById(
    "testimonials-carousel-nav-pagination-count-total"
  ) as HTMLElement;
  const totalSlides =
    document.querySelector("#testimonials-carousel .glide__slides")?.childElementCount ?? 0;
  const testimonialsNavButtonPrevious = document.getElementById(
    "testimonials-carousel-nav-button-previous"
  ) as HTMLElement;
  const testimonialsNavButtonNext = document.getElementById(
    "testimonials-carousel-nav-button-next"
  ) as HTMLElement;
  let glideCarousel: Glide | null = null;

  const onTestimonialsCarouselChange = (newIndex: number) => {
    testimonialsCurrentItemContainer.innerHTML = minTwoDigits(newIndex);
  };

  const initCarousel = () => {
    glideCarousel = new Glide("#testimonials-carousel", {
      perView: 3,
      focusAt: "center",
      type: "carousel",
      gap: 60,
      keyboard: false,
      breakpoints: {
        1440: {
          gap: 40,
        },
        1200: {
          gap: 30,
        },
        1024: {
          gap: 20,
        },
        768: {
          gap: 0,
        },
      },
    });

    glideCarousel.on("mount.before", function () {
      testimonialsCurrentItemContainer.innerHTML = "01";
      testimonialsTotalItemsContainer.innerHTML = minTwoDigits(totalSlides);
    });

    glideCarousel.on("move", function () {
      onTestimonialsCarouselChange(glideCarousel.index + 1);
    });

    glideCarousel.mount();
  };

  const destroyCarousel = () => {
    if (glideCarousel) {
      glideCarousel.destroy();
    }
  };

  const handleResize = (): void => {
    if (window.innerWidth < 1024) {
      glideCarousel?.enable();
    } else {
      glideCarousel?.disable();
    }
  };

  if (testimonialsCarousel) {
    customEventListener(testimonialsNavButtonPrevious, () => {
      glideCarousel?.go("<");
    });

    customEventListener(testimonialsNavButtonNext, () => {
      glideCarousel?.go(">");
    });

    initCarousel();
    handleResize();
    window.addEventListener("resize", handleResize);
  }
};

export default testemonialsCarousel;

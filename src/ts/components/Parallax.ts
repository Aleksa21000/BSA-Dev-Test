import { transform, lerp } from "../snippets/helpers";

class Parallax {
    private parallax: HTMLElement;
    private parallaxItems: NodeListOf<HTMLElement>;
    private dataMovement: number = 0;
    private movementPercentage: number = 0;
    private lerpMovementPercentage: number = 0;
    private sensitivePercentage: number = 0.03;

    constructor(parallax: HTMLElement) {
        this.parallax = parallax;
        this.parallaxItems = this.parallax.querySelectorAll(
            ".js-parallax-item"
        )! as NodeListOf<HTMLImageElement>;
        this.init();
    }

    private init() {
        this.parallaxItems.forEach((item) => {
            const movement = item.getAttribute("data-movement");
            if (movement) {
                this.dataMovement = parseFloat(movement);
                // Set initial position based on movement value
                item.style.top = `${this.dataMovement / 2}px`;
            }
        });
    }

    public updateItem() {
        const rect = this.parallax.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
            return; // Skip update if container is outside viewport (performance optimization)
        }

        this.parallaxItems.forEach((item) => {
            // Calculate element's position relative to viewport
            const rect = item.getBoundingClientRect();
            const position = rect.top - window.innerHeight;
            const maxHeight = rect.height + window.innerHeight;

            const movement = item.getAttribute("data-movement");
            if (movement) {
                this.dataMovement = parseFloat(movement);
                // Normalize position to a percentage value
                this.movementPercentage = position / maxHeight;
                // Smooth transition using linear interpolation
                this.lerpMovementPercentage = lerp(
                    this.lerpMovementPercentage,
                    this.movementPercentage,
                    this.sensitivePercentage
                );
                // Calculate final movement value
                const moveAmount = this.lerpMovementPercentage * this.dataMovement;
                transform(item, `translate3d(0px, ${moveAmount}px, 0px)`);
            }
        });
    }
}

const parallaxItems = document.querySelectorAll(".js-parallax");
const parallaxInstances: Parallax[] = [];

parallaxItems.forEach((parallaxItem) => {
    if (parallaxItem instanceof HTMLElement) {
        parallaxInstances.push(new Parallax(parallaxItem));
    }
});

const animate = () => {
    parallaxInstances.forEach((parallaxInstance) => {
        parallaxInstance.updateItem();
    });
    requestAnimationFrame(animate);
};

animate();

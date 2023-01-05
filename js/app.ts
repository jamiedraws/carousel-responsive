// components
import ResponsiveCarousel from "Shared/ts/components/responsive-carousel";

// adapters
import ResponsiveSlideCarouselAdapter from "Shared/ts/api/carousel/slide/adapters/responsive-slide-carousel";

// observers
import { observer } from "Shared/ts/observers/intersection";
import MediaQuery from "Shared/ts/observers/media-query";

observer(".slide--responsive", {
    inRange: (element) => {
        const carousel = new ResponsiveCarousel(
            new ResponsiveSlideCarouselAdapter(element)
        );

        carousel.enablePrevNextControls();

        new MediaQuery("(min-width: 400px)")
            .inbound((task) => carousel.setAttributes({ steps: 2 }))
            .outbound((task) => carousel.setAttributes({ steps: 1 }));

        new MediaQuery("(min-width: 700px)")
            .inbound((task) => carousel.setAttributes({ steps: 3 }))
            .outbound((task) => carousel.setAttributes({ steps: 2 }));

        new MediaQuery("(min-width: 1000px)")
            .inbound((task) => carousel.setAttributes({ steps: 4 }))
            .outbound((task) => carousel.setAttributes({ steps: 3 }));
    }
});

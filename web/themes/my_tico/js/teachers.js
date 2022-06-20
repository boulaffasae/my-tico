/**
 * @file
 * bee behaviors.
 */

(function ($, Drupal) {
  "use strict";

  /**
   * Behavior description.
   */
  Drupal.behaviors.my_tico_teachers = {
    attach: function (context, settings) {
      new Swiper(".teachers--swiper", {
        slidesPerView: 1,
        spaceBetween: 30,

        breakpoints: {
          1023: {
            slidesPerView: 3,
          },

          639: {
            slidesPerView: 2,
          },
        },

        // Navigation arrows
        navigation: {
          nextEl: ".teachers-swiper-button-next",
          prevEl: ".teachers-swiper-button-prev",
        },
      });
    },
  };
})(jQuery, Drupal);

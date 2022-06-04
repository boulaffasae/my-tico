/**
 * @file
 * bee behaviors.
 */

(function ($, Drupal) {
  "use strict";

  /**
   * Behavior description.
   */
  Drupal.behaviors.beeSwiper = {
    attach: function (context, settings) {
      new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
      });
    },
  };
})(jQuery, Drupal);

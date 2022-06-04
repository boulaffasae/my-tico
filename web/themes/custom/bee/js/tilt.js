/**
 * @file
 * bee behaviors.
 */

(function ($, Drupal) {
  "use strict";

  let tiltSettings = [];

  /**
   * Init tilt effect
   *
   * @param wrapper
   * @param elements
   */
  function initTilt(wrapper, elements) {
    const $wrapper = $(wrapper);
    const $elements = $(elements).once("tilt");
    if ($wrapper.length < 1 || $elements.length < 1) {
      return;
    }

    /** Init TweenMax  */
    TweenMax.set([$elements], { transformStyle: "preserve-3d" });

    /** Add event listeners fot tilt effect */
    $wrapper.mousemove((e) => {
      tilt(e.pageX, e.pageY, $wrapper, $elements);
    });

    /** Add event listeners fot mouse left */
    $wrapper.mouseleave((e) => {
      tilt($wrapper.width() / 2, $wrapper.height() / 2, $wrapper, $elements);
    });
  }

  /**
   * Shelly tilt
   *
   * @param cx
   * @param cy
   * @param $wrapper
   * @param $elements
   */
  function tilt(cx, cy, $wrapper, $elements) {
    const sxPos = ((cx / $wrapper.width()) * 100 - 50) * 2;
    const syPos = ((cy / $wrapper.height()) * 100 - 50) * 2;
    let elementsCounter = 0;

    /** Separate animation for each element */
    for (const $element of $elements) {
      /** Set random tilt multiplier */
      if (tiltSettings[elementsCounter] === undefined) {
        tiltSettings[elementsCounter] = Math.floor(Math.random() * 25) * 0.01;
      }

      /** Apply effect */
      TweenMax.to($element, 2, {
        rotationY: -tiltSettings[elementsCounter] * sxPos,
        rotationX: tiltSettings[elementsCounter] * syPos,
        transformPerspective: 500,
        transformOrigin: "center center 200",
        ease: Expo.easeOut,
      });

      elementsCounter++;
    }
  }

  /**
   * Behavior description.
   */
  Drupal.behaviors.beeTilt = {
    attach: function (context, settings) {
      initTilt("body", ".color-accent-motion");
    },
  };
})(jQuery, Drupal);

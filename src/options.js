/*!
 * options.js
 * Version: 1.0
 *
 * Copyright 2016 Karl Willingham
 * Released under the MIT license
 */

/* Default Settings
*/
var defaults = {

  // Initialize Drawing
  initialize: true,

  // Canvas Size
  canvasWidth: 500,
  canvasHeight: 500,

  // Canvas Border Color
  canvasStyleBorder: "#000 solid 0px",

  // Game Text ID - Leave Blank if not wanted
  gameTextID: "game-text",

  // Game Frame length
  frameLength: 8,

  // Speed up Factor
  speedFactor: 1.1,

  // Game Border Color
  borderColor: "#D46A6A",

  // Number of Blocks per row
  blocks: 20,

  // Snake Attributes
  snake: {
    // Snake type
    type: "snake",
    // Initial number of Blocks Size
    size: 3,
    // Snake Color
    color: "green",
  },

  // Mouse Attributes
  mouse: {
    type: "mouse",
    size: 1,
    color: "gray",
  },

};

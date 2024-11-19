/**
 * Smooth scrolling onClick event handler
 * @param {string} selector argument will be passed to `querySelector`, usually the HTML ID.
 * @param {integer} [offset=0] argument will be used to determine the offset position to be scrolled to.
 * @returns {boolean} false if `document.querySelector` doesn't find a match, otherwise true
 */
const smoothScrollTo = (selector, offset = 0) => {
  const element = document.querySelector(selector);

  if (element) {
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth"
    });

    return true;
  }

  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "gatsby-plugin-smoothscroll-offset:\n The selector: '%s' wasn't found in the document.\n Make sure you pass in a valid CSS selector string.",
      selector
    );
  }

  return false;
};

export default smoothScrollTo;
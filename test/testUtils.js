 /**
  * Factory function to create a ShallowWrapper for the App component.
  * @function setup
  * @param {object} props - Component props specific to this setup.
  * @returns {ShallowWrapper}
  */
export const findByTestAttr = (wrapper, val) => {
return wrapper.find(`[data-test="${val}"]`)
}
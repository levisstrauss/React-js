/* We will place every component to be imported here
  And what is cool about this is that webpack will use this component
  if its used or remove it if its not used

  Here is how it works.
  1 You create a component.
  2 You style the component
  3 You import the component in the global index.js file to be used
  4 Imported all in the containers folder by creating it.
  5 Added to the home page in the page folder
 */
export { default as Accordion } from './accordion';
export { default as Card } from './card';
export { default as Jumbotron } from './jumbotron';
export { default as Footer } from './footer';
export { default as OptForm } from './opt-form';
export { default as Header } from './header';
export { default as Feature } from './feature';
export { default as Form } from './form';
export { default as Profiles } from './profiles';
export { default as Loading } from './loading';
export { default as Player } from './player';
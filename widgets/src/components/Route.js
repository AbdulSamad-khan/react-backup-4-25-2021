// we import react when we use jsx inside our component

const Route = ({ route, children }) => {
  console.log(children + "childrencomponent");
  return window.location.pathname === route ? children : null;
};

export default Route;

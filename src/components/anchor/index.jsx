const Anchor = (props) => {
  return (
    <a className="primary-anchor" href={props.href} target={props.target}>
      {props.children}
    </a>
  );
};

export default Anchor;

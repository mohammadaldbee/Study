const User = (props) => {
  return (
    <li class="nav-item">
      <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
        {props.props}
      </a>
    </li>
  );
};
export default User;

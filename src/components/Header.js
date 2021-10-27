import '../styles/Header.css';
import '../styles/App.css';

const Button = ({text, icon}) => {
  return (
      <li>
        <button className="header__button">
            <i class={`fa fa-${icon}`}></i>
            <span>{text}</span>
        </button>
      </li>
  )
}
function Header() {
  return (
      <header className="header">
       <nav>
         <ul className="header_list">
           <Button text="browser" icon="bars" />
           <Button text="add new questions" icon="plus" />
           <Button text="api" icon="gears" />
           <Button text="discuss" icon="comment" />
           <Button text="login" icon="arrow-right" />
         </ul>
       </nav>
      </header>
  );
}

export default Header;
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="Navigation">
            <div className="Navigation__menu">
                <h2 className='Navigation__menu__tittle' >Learn React</h2>
                <nav className='menu__list' >
                    <a href="https://react.dev/learn#">Overview</a>
                    <a href="https://react.dev/learn#components">Creating and nesting components</a>
                    <a href="https://react.dev/learn#writing-markup-with-jsx">Writing markup with JSX</a>
                    <a href="https://react.dev/learn#adding-styles">Adding styles</a>
                    <a href="https://react.dev/learn#conditional-rendering">Displaying data</a>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;
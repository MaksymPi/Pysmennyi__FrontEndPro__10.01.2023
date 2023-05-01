import './Content.css';
import Cont from "./Cont.png"
const Content = () => {
    return (
        <div className="Content">
            <h2 className="Content__title">Create user interfaces from components</h2>
            <p className='text'>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</p>
            <div className="Content__img">
                <img src={Cont} alt="" />
            </div>
            <p className='text' >Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.</p>
        </div>
    )
}
export default Content;

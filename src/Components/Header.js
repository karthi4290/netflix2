import { LOGO } from './../utils/constants';

const Header = () => {
    return (
        <div className="w-[14%] px-14 z-10">
            <img src={LOGO} alt="Logo" />
        </div>
    )
}

export default Header
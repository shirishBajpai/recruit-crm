import ProfileActions from './ProfileActions/ProfileActions';
import './ProfileHeader.css';
import image from "../../assets/image.jpg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import Contacts from './Contacts';

const ProfileHeader = ({ candidate }) => {
    const { name, position, country, state } = candidate?.basic_info || {}
    return (
        <>
            <div className='profile'>
                <div className="header">
                    <img src={image} alt="pic" className='image' />
                    <div>
                        <div className='personal'>
                            <div className='name'>{name}</div>
                            <div className='social'>
                                <img src={facebook} alt="pic" className='icon' />
                                <img src={instagram} alt="pic" className='icon' />
                                <img src={twitter} alt="pic" className='icon' />
                                <img src={linkedin} alt="pic" className='icon' />
                            </div>
                        </div>
                        <div className='details'>
                            <div>{position}</div>
                            <div>{country}</div>
                            <div>{state}</div>
                        </div>
                    </div>
                </div>
                <ProfileActions candidate={candidate} />
            </div>
            <Contacts candidate={candidate} />
        </>
    )
}

export default ProfileHeader;
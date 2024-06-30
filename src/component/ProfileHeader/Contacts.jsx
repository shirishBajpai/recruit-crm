import './ProfileHeader.css'

const Contacts = ({ candidate }) => {
    const { basic_info = {} } = candidate || {}
    return (
        <div className="contacts">
            <div className='contact-detail'>
                <div>&#128233;&nbsp;&nbsp;{basic_info.email}</div>
                <div>&#128222;&nbsp;&nbsp;{basic_info.phone}</div>
            </div>
            <div>&#8987;&nbsp;&nbsp;{basic_info.last_update}</div>
        </div>
    )
}

export default Contacts;
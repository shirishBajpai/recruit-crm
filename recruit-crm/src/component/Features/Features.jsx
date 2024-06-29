import './Features.css'

const Features = () => {
    const featureAllowed = ['Notes', 'Tasks', 'Meetings', 'Files', 'Chat'];
    const selectedFeature = [1, 2, 3, 4];
    return (
        <div className="features">
            <div className="features-actions">
                <div>&#9733;</div>
                <div>&#9734;</div>
                <div>&#9735;</div>
                <div>&#9736;</div>
            </div>
            <div className="features-listing">
                {featureAllowed.map((feature) => <div>{feature}</div>)}
            </div>
            <div className="features-selected">
                {selectedFeature.map(() => <div className='features-selected-actions'>Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.</div>)}
            </div>
        </div>
    )
}

export default Features;
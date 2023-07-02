// This component will be sent props for the image Source and the alt. I may later style this component 
function Skill({title, alt, src}) {
    return <img title={title} alt={alt} src={src} />
};

export default Skill;
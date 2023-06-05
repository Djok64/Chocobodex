import './ChocoCard.css'

const ChocoCard= ({chocobo}) => {
    
    return (
        <div className="ChocoCard">
            <figure>
                <img className="ChocoImg" src={chocobo.imgSrc} alt={chocobo.choconame} />
                
            <figcaption className="ChocoName" style={{color:chocobo.chococolor}}> {chocobo.choconame}</figcaption>
            <br/>
            <p className="ChocoInfo">{chocobo.info}</p>
            <br/>
            <p className="ChocoHave">{chocobo.have}</p>
            </figure>

        </div>
    );
}

export default ChocoCard ;
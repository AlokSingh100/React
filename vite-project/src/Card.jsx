import propic from './assets/pic.jpg';

function Card(){

    return(
<div className="card">
<img className='card-image' src={propic} alt=""  />
<h2 children="card-title">Akij</h2>
<p className='card-text'>It is my first project</p>
</div>
    );
}

export default Card;
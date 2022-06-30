import foto from '../asest/foto.jpg'
export default function Student() {
    return(
        <div>
            <div className='cardinfo'>
                <img className='foto' src={foto}/>
                <div className='infomia'>
                    <h1>Joan Emmanuel Montoya Lopez</h1>
                    <h2>190904</h2>
                    <h3>IDGS 8-A-11</h3>
                    <h3>Project: Poke api, router integration</h3>
                    <h3>Professor: ALBERTO CAMPOS HERNANDEZ</h3>
                    <h3>Class: Cross-Platform Software Development</h3>
                </div>
            </div>
            
        </div>
        
    )
    
}
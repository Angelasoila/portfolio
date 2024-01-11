import {html, useprogress} from '@react-three/drei';
const loader=() =>{
    const progress=useprogress();
    return(
       <html>
        <span className='canvas-load'></span>
        <p>
            style={{
            fontsize:14,
            fontweight: 800,
            color:'#f1f1f',
            margintop: 40,

            }}
        </p>
       </html>
    )
}
export default loader
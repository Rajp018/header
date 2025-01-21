import "./IMAGE.png"
import "./logo.css"
export default function Logo() {
    let style={color:"pink"}

    return (<>
        <div className="logocont">
            <img src="IMAGE.png" height={25} width={25} ></img>
            <a style={style} href="">CRYPTIC CODERS</a>
        </div>
    </>)
}
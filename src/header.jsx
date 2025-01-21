import Content from "./content";
import "./header.css"
import Logo from "./logo";
export default function Header() {
    
    return(<>
        <div className="HContainer">
            <Logo className="LOGO"></Logo>
            <Content className="CONTENT"></Content>

        </div>
        </>);
}
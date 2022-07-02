

const Welcome = (props) => {
    return ( 
        {!props.nama ? <h1>selamat datang {props.nama}</h1> : <Home/>}
     );
}

const Home = () => {
    return ( 
        <button>login</button>
     );
}
 
 
export default Welcome;

const element = createRenderer(document.querySelector('#root'))

element.render(
    <Welcome nama= "jamil"/>
)



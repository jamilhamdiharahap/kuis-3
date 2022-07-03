import ReactDOM from 'react-dom/client'

const Welcome = (props) => {
    return ( 
        <h1>Selamat datang {props.nama}</h1>
     );
}

let nama;

const Home = () => {
    if(!nama){
        return <button>login</button>
    }else{
        return <Welcome />
    }
    
}

const elementRoot = ReactDOM.createRoot(document.querySelector('#root'))
elementRoot.render(<Welcome nama="jamil"/>);


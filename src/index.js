import ReactDOM from 'react-dom/client'

const Welcome = (props) => {
    return ( 
        <h1>Selamat datang {props.nama}</h1>
     );
}

const Home = () => {
    if(!nama){
        return <button>login</button>
    }
    
}

ReactDOM.createRoot(document.querySelector('#root')).render(
    <Welcome nama="jamil"/>
)


import {useState,useEffect} from 'react'
import './App.css'

function App() {
  const [search,setSearch] = useState<string>('cats')
  const [listImages,setListImage] = useState<[]>([])
  useEffect(() => {
   
    const fetchApi = async () => {
  
      if(search==='') return;
      //paginators 
      const IMAGE_BY_PAGE = 10;
      const API_KEY = '23782832-a08ee4ab4299c2e8c036c2c76';
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${IMAGE_BY_PAGE}`
     
      const response = await fetch(URL)
      const {hits:lista} = await response.json()
      // console.log(data);
      setListImage(lista)
    }
    fetchApi()
  }, [search])


  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Search Images</p>
      <Form setSearch={setSearch}/>
      </div>
      <div className="row justify-content-center">
          <ListImagesGalery listImages={listImages}/>
      </div>
    </div>
  );
}

// component form
type Tform = {
  setSearch:(arg:string)=>void
}

const Form = ({setSearch}:Tform) => {
  const [input,setInput] = useState<string>('');
  const [isError,setIsError] = useState<boolean>(false);
  
  
  const handlerForm = (e:any)=>{
   e.preventDefault();

   if(input.trim()===''){
     return setIsError(true)
   }

   setSearch(input)

  }

  return(
   <>
   <form onSubmit={handlerForm}>
      <div className="row">
      <div className="form-group col-md-8">
        <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Search Images..." className="form-control form-control-lg" />
      </div>
      <div className="form-group col-md-4">
        <input type="submit" className="btn btn-lg btn-danger btn-block" />
      </div>
    </div>
   </form>
   {isError&& <Error message='Enter a image name'/> }
   </>
  )
}


//error components
const Error = ({message}:{message:string}) => {
return(
  <p className="my-3 p-4 text-center alert alert-danger">{message}</p>
)
}


//list componentStack
const ListImagesGalery = ({listImages}:{listImages:[]}) => {
  
  let list = listImages.map((image,idx) =>(<Image key={idx} image={image}/>))

  return(
    <div className="col-12 p-5 row">
      {list}
    </div>
  )
}

//image component
type Iimage = {
  image: {
    "id": number,
    "pageURL": string,
    "type": string,
    "tags": string,
    "previewURL": string,
    "previewWidth": number,
    "previewHeight": number,
    "webformatURL": string,
    "webformatWidth": number,
    "webformatHeight": number,
    "largeImageURL": string,
    "imageWidth": number,
    "imageHeight": number,
    "imageSize": number,
    "views": number,
    "downloads": number,
    "collections": number,
    "likes": number,
    "comments": number,
    "user_id": number,
    "user": string,
    "userImageURL": string
  }
}

const Image = ({image}:Iimage)=> {
  
  const {largeImageURL,likes, previewURL, tags, views} = image;

  return(
   <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
<div className="card">
     <img src={previewURL} className="card-image-top"   alt={tags} />
     <div className="card-body">
       <p className="card-text">{likes} Me gusta</p>
       <p className="card-text">{views} Vistas</p>
     </div>
     <div className="card-footer">
       <a href={largeImageURL} target='_blank' rel="noopener" className="btn btn-primary btn-block">Ver image</a>
     </div>
   </div>
   </div>
  )
}


export default App;



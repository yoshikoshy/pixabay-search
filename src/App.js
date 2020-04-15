import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);  //set to false after getting data
    })
    .catch(err => console.log(err));
  }, [term]);  //add term as a dependency for whenever it changes, to run again

  return (
    <div className="container mx-auto">
      <Header />
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-4 gap-3">
        {images.map(image => 
          <ImageCard key={image.id} image={image}/>
        )}
      </div>}
      <Footer />
    </div>
  );
}

export default App;

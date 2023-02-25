import './App.css';
import Home from './component/Home/Home';
import Review from './component/review/Review';
import Eventdetail from './component/Eventdetail/Eventdetail';

function App() {
  const event = {"id":7,"name":"Rollo","description":"Open bite of right wrist, initial encounter","imageBase64String":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIhSURBVDjLpZM9SJVhFMd/Vy8pV40yIRHvBY0QUcHUqAgXo7YapKGm1oJ2scGWcI2mIBojh5YIgoYkl5sNkZGUaH6QkhejED/vfd/nfDS8emloEDxwOHCe8/9xnuc5J+XuHMYqOKQdGpDO55/89w5mgpnjLpgpZjEiiqoAAREhhEAaoKmpqyx0d9xtzxOAu2Gm5WhmuCszM28TAEAUbeHue4dJQSLSPdG+Jx1VV9cRQjEBJGQjkzlGNtvD7u46a2uz5HJnMQtMT7+is/MqlZVp5ubesb6+jFlAJKJCJJTJ2WwPS0sfECmRy/WxuJhne/s3LS0XuPfyGnef93Okug6RgGoghIgKVcFdUA0AbG4WWFjIUyyu09Y2QE1NPYXCNyINNDe0MzJ+m0iKmCkiJdJmRVSFBASqAVXl/uubuAViF2IRmo6fpr3xHFulHR5+fcTQmWFUI9IhRJgJqjEhFOntvUEIEc/mH3O54xbqhppiOKsbK3Q1X2Q7LjI8OcT16j7SItFeBzFTUy/K71GSGHXjx5/vBBPEAkEDm9EW3dl+tsMuT5fypKMowixQVVXzz7cZJSkhKpw8mkNMUTcKG8vU1zbyaSXPl5XPDNZ0kxobu+PuMSLJdLlHiDhvbIpSHBNbTEliTjV0cL71Ch+X3zM5P8FgbScnKjOkDrqNnQ8qdvpyA5mJufGfsXFpddRngYMDWkdSO2qVmaJp669RX9rP/wXZZaE2eCuTIAAAAABJRU5ErkJggg==","reviews":[{"id":1,"authorName":"Gauthier","comment":"Oth fx lower end of unsp ulna, init for opn fx type I/2","reviewPointsFrom0to10":2},{"id":2,"authorName":"Chandal","comment":"Nondisp fx of base of unsp MC bone, subs for fx w delay heal","reviewPointsFrom0to10":10},{"id":3,"authorName":"Mara","comment":"Congenital absence of thigh and lower leg with foot present","reviewPointsFrom0to10":1}]}
  console.log(event)
  return (
    <div >
      <Home />
      <Review/>
      <Eventdetail event={event}/>
    </div>
  );
}

export default App;

// Loading.jsx
import 'animate.css';
import "../css/spinner.css"

const Loading = ({ isVisible }) => {
  return (
    <div className={`flex justify-center items-center h-screen ${isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}`}>
<div className="sk-folding-cube">
  <div className="sk-cube1 sk-cube"></div>
  <div className="sk-cube2 sk-cube"></div>
  <div className="sk-cube4 sk-cube"></div>
  <div className="sk-cube3 sk-cube"></div>
</div>
    </div>
  );
};

export default Loading;

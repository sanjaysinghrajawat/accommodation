import "./singlePage.scss";
import Slider from "../../components/slider/Slider"
import Map from "../../components/map/Map"
import { useParams } from "react-router-dom";
import { singlePageData } from "../listPage/singlePostData";

function SinglePage() {

  const { id } = useParams();
  console.log("id-->", id);
  const data = singlePageData.find(item => item.id === parseInt(id));
  console.log(data);

  return data && (
    <div className="singlePage p-10 lg:mx-20 ">
      <div className="details">
        <div className="wrapper">
          <Slider images={data.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{data.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{data.address}</span>
                </div>
                <div className="price">₹ {data.price}</div>
              </div>

            </div>
            <div
              className="bottom">
              {data.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>500 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>

              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>

              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>

              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[data]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button
            // onClick={handleSave}
            >
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

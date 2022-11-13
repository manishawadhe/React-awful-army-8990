import {
  Center,
  Image,
  Box,
  Badge,
  Alert,
  AlertIcon,
  Select,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams ,Link} from "react-router-dom";
import { useState, useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar";
import style from "./singlePage.module.css";
import { IoMdLocate } from "react-icons/io";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BsExclamationCircle,
  BsSlash,
  BsMap,
  BsBlockquoteRight,
  BsStar,
} from "react-icons/bs";
import { DragHandleIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getSingleproduct } from "../../Redux/AppReducer/action";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  // useEffect(() => {
  //   fetch(`http://localhost:8000/results/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res);
  //       console.log(res)
  //     });
  // }, [id]);
  const dispatch=useDispatch();
  const product=useSelector((store)=>store.appReducer.singleProduct)
  // console.log(product)
useEffect(()=>{
  dispatch(getSingleproduct(id)).then((res)=>setData(res.payload))
},[id,dispatch])

  // const random=Math.floor(Math.random() * 5);
  console.log(data);
  return (
    <>
      <Navbar />
      <br></br>
      <div className={style.main}>
        <div className={style.one}>
          <div>
            <hr></hr>
            <br></br>
            <div>
              <Image src={data?.images_large?.length>0 && data?.images_large[0]} width="80%" />
              
            </div>
            <div className={style.image}>
              <Image src={data?.images_large?.length>0 && data?.images_large[1]} />
              <Image src={data?.images_large?.length>0 && data?.images_large[2]} />
            </div>
          </div>
          <div className={style.details}>
            <div style={{ fontSize: "25px" }}>{data.title}</div>
            <br></br>
            <div className={style.repflex}>
              <h3>
                <IoMdLocate />
              </h3>
              <h3>{`${data.city} ${data.country}`}</h3>
            </div>
            <br></br>
            <div className={style.extra1}>
              <div className={style.repflex}>
                Rated
                <b
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  5.5/5
                </b>
                By One Travelers
              </div>
              <div>
                <b style={{ backgroundColor: "blue", color: "white" }}>
                  See More Review
                </b>
              </div>
            </div>
            <br />
            <hr></hr>
            <br></br>
            <div className={style.feture}>
              <b>Resort</b>
              <b>4 Bedroom</b>
              <b>4 Bathroom</b>
            </div>
            <br></br>
            <div className={style.feture}>
              <b>20 Max GUESTS</b>
              <b>WIFI</b>
              <b>Kitchen</b>
              <b>AC</b>
            </div>
            <br></br>
            <div className={style.feture}>
              <b>Pet Not Allowed</b>
            </div>
          </div>
        </div>
        <div className={style.two}>
          <div>
            Starting
            <div className={style.repflex}>
              <p style={{ fontSize: "50px" }}>₹2000</p>Per Night
            </div>
            <div>
              <Alert status="warning">
                <AlertIcon />
                Select dates
              </Alert>
            </div>
            <br></br>
            <div
              className={style.repflex}
              style={{ border: "1px solid black" }}
            >
              <input type="date" placeholder="Check In" required/>
              <input type="date" placeholder="Check Out" />
            </div>
            <br></br>
            <div>
              <Select placeholder="Select Guests">
                <option value="option1">1 GUESTS</option>
                <option value="option2">2 GUESTS</option>
                <option value="option3">3 GUESTS</option>
                <option value="option3">4 GUESTS</option>
                <option value="option3">5 GUESTS</option>
                <option value="option3">6 GUESTS</option>
                <option value="option3">7 GUESTS</option>
              </Select>
              <br />
              <p>Rateplan: Cooked Breakfast</p>
            </div>
            <br></br>
            <div className={style.book}>
              <Link to={`/checkout/${id}`}><button>
                REQUEST TO BOOK
              </button></Link>
            </div>
          </div>
        </div>{" "}
        {/*two div  */}
      </div>{" "}
      {/* Main */}
      <br />
      <div className={style.tab}>
        <div>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>
                <BsExclamationCircle /> &nbsp;OVERVIEW
              </Tab>
              <Tab>
                <BsSlash /> AMENITIES
              </Tab>
              <Tab>
                <BsMap /> &nbsp; MAP
              </Tab>
              <Tab>
                <BsBlockquoteRight /> POLICIES
              </Tab>
              <Tab>
                <BsStar /> REVIEWS
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className={style.tab1}>
                  <div>
                    <div
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        textAlign: "center",
                        padding: "15px 30px 15px 30px",
                        width: "150%",
                      }}
                    >
                      <h1>Villa</h1>
                      <br></br>Type of Properties
                    </div>
                    <br></br>
                    <div className={style.repflex}>
                      <div
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                          textAlign: "center",
                          padding: "15px 30px 15px 30px",
                          width: "150%",
                        }}
                      >
                        <h1>5</h1>
                        <br></br>BEDROOM
                      </div>
                      <div
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                          textAlign: "center",
                          padding: "15px 30px 15px 30px",
                          width: "150%",
                        }}
                      >
                        <h1>2</h1>
                        <br></br>Bathroom
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "justify", width: "50%" }}>
                    Old Beach Side Romantic Portuguese Red & Pink Villa of 3350
                    sq. ft. with Private Garden & Sea Facing Balcony & only 30
                    meters from the shoreline. Two Double Bedrooms & Two Single
                    Bedrooms, Fully equipped Kitchen with a large Dining Hall &
                    a very spacious Living Room with extended front balcony to
                    relax, sit out in front of private garden. Two Toilets & Two
                    Bathrooms. Fully Furnished Villa. Cable TV & WIFI Sea View
                    Terrace to Sit Out & Chill. House-keeping & Cleaning
                    services provided six days a week between 1 pm. and 4 pm. (
                    Except Sunday ) Shorebar, Sunset, Janet & John, Cafe
                    Liliput, Curlies, Shiva Valley along the coast line. Taxi &
                    Bike hire in front of Villa. Very Close ... See More What
                    can you do in & around Middle Anjuna Beach, Goankar Vaddo,
                    Near Sunset Restaurant, , Anjuna
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className={style.tabkey}>
                  <div>SAFE LOCKER/DEPOSIT BOX</div>
                  <div>IRON</div>
                  <div>REFRIGERATOR</div>
                  <div>TELEVISION</div>
                  <div>SATELLITE/CABLE CONNECTION</div>
                </div>
                <br></br>
                <div className={style.tabkey}>
                  <div>BOOKS & MAGAZINES</div>
                  <div>WASHING MACHINE</div>
                  <div>COOK ON CALL</div>
                  <div>LINEN PROVIDED</div>
                  <div>HOT WATER</div>
                  <div>WESTERN TOILET</div>
                  <div>KETTLE</div>
                  <div>SHOWER</div>
                </div>
                <br></br>
                <div className={style.tabkey}>
                  <div>HOUSEKEEPING</div>
                  <div>RESTAURANTS CLOSE BY</div>
                  <div>WIRELESS INTERNET</div>
                  <div>PUBLIC TRANSPORTATION</div>
                  <div>SEA VIEW</div>
                  <div>BEACH NEARBY</div>
                  <div>BAR.B.Q. GRILL</div>
                </div>
                <br></br>
                <div className={style.tabkey}>
                  <div>POTS AND PANS</div>
                  <div>CLOTHES DRYER</div>
                  <div>STUDY / OFFICE</div>
                  <div>SPARE MATRESSES</div>
                </div>
                <br></br>
                <div className={style.repflex} style={{}}>
                  <b>Bedroom 1</b>
                  <b>Bedroom 2</b>
                  <b>Bedroom 3</b>
                </div>
              </TabPanel>

              <TabPanel>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!…"
                    style={{
                      width: "100%",
                      frameborder: "1",
                      border: "2px solid black",
                    }}
                    allowfullscreen
                  ></iframe>
                </div>
              </TabPanel>

              <TabPanel>
                <div className={style.tab1}>
                  <div style={{ textAlign: "start" }}>
                    <strong>Default Cancellation Policy</strong>
                    <div>
                      Stringent: No charges will be levied if booking is
                      canceled 61 days prior to check-in. If cancellation is
                      done between 30 to 60 days prior to check-in, 50% of the
                      total booking amount will be charged. Post that, there
                      will be no refund.
                    </div>
                    <br></br>
                    <p></p>
                    <div>
                      <strong>Cleaning Fee</strong>
                      <p>Cleaning Fee INR 1200.00 Fixed Amount Per Stay</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "start" }}>
                    <strong>House Rule</strong>
                    <div>
                      {" "}
                      Unmarried Couples not allowed. Loud Music not allowed.
                      Stags / All Male Groups not allowed. Smoking inside
                      Property not allowed. 01. STRICTLY NO NOISE POLLUTION
                      AFTER 10 pm & before 7am. 02. STRICTLY NO CONSUMPTION /
                      POSSESSION OF ANY DRUGS IN VILLA.. 03. OUTSIDERS /
                      STRANGERS NOT ALLOWED IN OUR VILLA... 04. WE ARE NOT
                      RESPONSIBLE FOR ANY LOSS OF LUGGAGE / VALUABLES.... 05.
                      FREE LOCKER SERVICES PROVIDED IN HOUSE.
                    </div>
                    <br></br>
                    <p></p>
                    <div>
                      <strong>Security Deposit</strong>
                      <p>Security Deposit INR 10000.00 Fixed Amount Per Stay</p>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div
                  style={{
                    boxShadow:
                      "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  }}
                >
                  <div>
                    <h4>
                      <b
                        style={{
                          fontSize: "18px",
                          backgroundColor: "blue",
                          color: "white",
                        }}
                      >
                        4/5
                      </b>{" "}
                      Shreyas Nandi
                    </h4>
                    <p>
                      Written by Shreyas on 14-Jan-2016. Customer stayed on
                      01-Sep-2013
                    </p>
                    <p>29/09/2013 to 2/10/2013</p>
                  </div>
                  <br></br>
                  <div>
                    <h4>
                      <b
                        style={{
                          fontSize: "18px",
                          backgroundColor: "blue",
                          color: "white",
                        }}
                      >
                        4/5
                      </b>{" "}
                      Awesome
                    </h4>
                    <p>
                      Written by joseph on 14-Jan-2016. Customer stayed on
                      01-Mar-2013
                    </p>
                    <p>
                      Definitely recommend this villa for any family or group of
                      friends looking to stay at Anjuna.
                    </p>
                    <p>
                      So close to the beach with everything you need next to
                      you. Hilario is a great host, arranged airport transfer
                      for us and was very helpful.
                    </p>
                    <p>Hope to come again soon!</p>
                  </div>
                  <br></br>
                  <div>
                    <h4>
                      <b
                        style={{
                          fontSize: "18px",
                          backgroundColor: "blue",
                          color: "white",
                        }}
                      >
                        4/5
                      </b>{" "}
                      Navneet Kumar
                    </h4>
                    <p>
                      Definitely recommend this villa for any family or group of
                      friends looking to stay at Navneet
                    </p>
                    <p>
                      So close to the beach with everything you need next to
                      you. Hilario is a great host, arranged airport transfer
                      for us and was very helpful.
                    </p>
                    <p>29/09/2015 to 2/10/2015</p>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div></div>
      </div>
      <br></br>
      <br></br>
      <p></p>
    </>
  );
};

export default SingleProduct;

import {
  Stack,
  Textarea,
  Image,
  Box,
  Heading,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import style from "./checkout.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { Alert, AlertIcon, Select } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
  IconName,
  AiOutlineUser,
  AiOutlineMessage,
  AiFillBook,
} from "react-icons/ai";
import { useDispatch ,useSelector} from "react-redux";
import { getSingleproduct } from "../../Redux/AppReducer/action";
const Checkout = () => {
  const toast = useToast();
  const statuses = "Booking success";

  const [data, setData] = useState({});
  // const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  // useEffect(() => {
  //   fetch(`http://localhost:8000/results/${id}`)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  // console.log(data);
  const dispatch=useDispatch();
  const product=useSelector((store)=>store.appReducer.singleProduct)
  // console.log(product)
useEffect(()=>{
  dispatch(getSingleproduct(id)).then((res)=>setData(res.payload))
},[id,dispatch])

  const [alrt, setalrt] = useState(false);
  // const navigate=useNavigate()
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <div>
        {" "}
        {/* Main */}
        <div className={style.devide}>
          <div className={style.one}>
            <div
              className="card text-white bg-primary mb-1"
              style={{
                padding: "30px 40px 30px 40px",
                border: "3px solid blue",
              }}
            >
              <div className="card-header">Book Tension Free</div>
              <div className="card-body">
                <li className="card-title">
                  Your payments are secured by Tripvillas.
                </li>
                <li className="card-text">
                  The amounts are released to verified owners in advance while
                  new owners are paid post your check-in and confirmation.
                </li>
                <li>
                  You can contact us if you face any issues during checkin or
                  your stay.
                </li>
              </div>
            </div>
            <div className={style.useflx}>
              <div style={{ width: "30%" }}>
              <Image src={data?.images_large?.length>0 && data?.images_large[0]}/>
              </div>

              <div style={{ width: "100%" }}>
                <h5>Property Ref Id #{data.id}</h5>
                <p>{data.title}- {data.city}</p>
                <p>Porvorim, Goa, INDIA</p>
                <p>
                  Resort | Accommodates max 20 guests | 4 Bedroom(s) | 4
                  Bathroom(s)
                </p>
              </div>
            </div>
            <br></br>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "15px",
                border: "1px",
              }}
              className={style.box}
            >
              <div>check In
                <p>02/05/2021</p>
              </div>
              <div>Check Out <p>09/05/2021</p></div>
              <div>Guests 3</div>
              <div>Unit {data.units}</div>
            </div>
            <br></br>
            <div className={style.useflx}>
              <h6>
                Sub
                Total...........................................................................................................................................................
              </h6>
              <h6>₹2000.00</h6>
            </div>
            <div className={style.useflx}>
              <h6>
                discount...............................................................................................................................................................
              </h6>
              <h6>₹0</h6>
            </div>
            <div className={style.useflx}>
              <h6>
                Tax...............................................................................................................................................................
              </h6>
              <h6>₹256</h6>
            </div>
            <div className={style.useflx}>
              <h6>
                Total.............................................................................................................................................................
              </h6>
              <h6>₹3397</h6>
            </div>

            <div>
              Rate Plan
              <p>Cooked Breakfast</p>
              <p>Stringent Cancellation Policy</p>
              <div>
                No charges will be levied if booking is canceled 61 days prior
                to check-in. If cancellation is done between 30 to 60 days prior
                to check-in, 50% of the total booking amount will be charged.
                Post that, there will be no refund.
              </div>
            </div>
          </div>
          <div className={style.two}>
            <div>
              <Alert status="warning">
                <AlertIcon />
                Book fast. Your dates might get booked by someone else.
              </Alert>
            </div>
            <div>
              <br></br>
              <FormControl>
                <div className={style.useflx}>
                  <h4>
                    <AiOutlineUser />
                  </h4>
                  <h4>Enter your contact information</h4>
                </div>
                <hr></hr>
                <br></br>
                <div className={style.useflx}>
                  <select style={{ border: "1px solid gray" }}>
                    <option>+91</option>
                    <option value="">+65</option>
                    <option value="">+76</option>
                    <option value="">+13</option>
                    <option value="">+21</option>
                  </select>
                  <Input type="number" placeholder="Enter Number" />
                </div>
                <br></br>
                <div className={style.useflx}>
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>
                <br></br>
                <div>
                  <Input type="email" placeholder="Email Adress" />
                </div>
                <br></br>
                <div className={style.useflx}>
                  <h3>
                    <AiOutlineMessage />
                  </h3>
                  <h4>Are there any special requests?</h4>
                </div>
                <div>
                  <Textarea placeholder="Enter Massage" size="md" />
                  <p style={{ textAlign: "initial" }}>
                    This message will be visible to the owner/manager once
                    she/he accepts the booking
                  </p>
                </div>
                <br></br>
                <div className={style.useflx}>
                  <h3>
                    <AiFillBook />
                  </h3>
                  <h4>Booking Option</h4>
                </div>
                <br></br>
                <div>
                  <div className="card">
                    <div
                      className="card-body"
                      style={{ padding: "10px 40px 10px 40px" }}
                    >
                      <h3 className="card-title">Pay ₹1 Now.</h3>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Pay the rest using a payment link only when home
                        owner/manager accepts the booking.
                      </h6>
                      <p className="card-text">
                        If owner declines the booking, ₹1 will be refunded back
                        to you. Pay using 100+ payment modes including
                        Credit/Debit cards, Netbanking, UPI, Wallets etc
                      </p>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          toast({
                            position: "bottom-center",
                            render: () => (
                              <Box color="black" p={10} bg="#bee3f8">
                                Thank You For Chose this Method
                              </Box>
                            ),
                          })
                        }
                      >
                        Chose This Method
                      </button>
                    </div>
                  </div>
                </div>
                <br></br>
                <div>
                  <div className="card">
                    <div
                      className="card-body"
                      style={{ padding: "10px 40px 10px 40px" }}
                    >
                      <h3 className="card-title">
                        Put your credit/debit card on file.
                      </h3>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Pay the rest using a payment link only when home
                        owner/manager accepts the booking.
                      </h6>
                      <p className="card-text">
                        If owner declines the booking, ₹1 will be refunded back
                        to you. Pay using 100+ payment modes including
                        Credit/Debit cards, Netbanking, UPI, Wallets etc
                      </p>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          toast({
                            position: "bottom-center",
                            render: () => (
                              <Box color="black" p={10} bg="#bee3f8">
                                Thank You For Chose this Method
                              </Box>
                            ),
                          })
                        }
                      >
                        Chose This Method
                      </button>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div style={{ backgroundColor: "lightgray" }}>
                  By clicking 'Agree & Continue', you are agreeing to our Terms
                  & Conditions, Privacy Policy, Booking policies like
                  cancellation policies, house rules.
                </div>
                <br></br>
                <div className={style.agree1}>
                  <button
                    onClick={() =>
                      toast({
                        title: "Booking Successfull.",
                        description:
                          "We've Sending Mail & Text on your account for you.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    Agree {"&"} Continue {statuses}
                  </button>
                </div>
              </FormControl>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      {/* Main  */}
    </>
  );
};
export default Checkout;
// <<<<<<< HEAD
// // >>>>>>> d089772c894e513f0d87fd34dbfac4647092e219
// =======
// >>>>>>> adc4e1bf5cba29a75ddc06dcf2ef3940ddf44c95

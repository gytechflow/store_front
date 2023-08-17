import { Article } from "../Article";
import {
  Cart4,
  CartFill,
  CurrencyDollar,
  Heart,
  HeartFill,
  PlusSquare,
} from "react-bootstrap-icons";
import { Badge, Card } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import "./ArticleCard.module.scss";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../stores/slices/CartSlice";

export default function ArticleCard({ article }: { article: Article }) {
  let [diplayCardAction, setDisplayCardAction] = useState(false);
  let [cartIconBackgroundColor, setCartIconBackgroundColor] = useState("black");
  let [favoriteIconBackgroundColor, setFavoriteIconBackgroundColor] =
    useState("black");

  let navigate = useNavigate();
  const dispatch = useDispatch();

  async function goToArticleDetail(event: any) {
    navigate(`articles/${article.id}`);
    // Dans ce cas c'est ce composant qui possède la responsabilité de savoir sur quelle route rediriger l'utilisateur
  }

  return (
    <MDBCol md="4" lg="3" className="mb-4">
      <div className="position-relative">
        <MDBCard
          style={{ backgroundColor: "rgba(0, 0, 0, 0.06)", overflow: "hidden" }}
          onMouseMove={() => setDisplayCardAction(true)}
          onMouseLeave={() => setDisplayCardAction(false)}
          className=""
        >
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <div className="cardtop" onClick={(e) => goToArticleDetail(e)}>
              <Badge bg="secondary">
                {article.price.amount}
                <CurrencyDollar />
              </Badge>
              <MDBCardImage
                src={`${Config.imageAssetsUrl}${article.product.image}`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./logo512.png";
                }}
                className="card-img-top"
                fluid
                alt={article.product.name}
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "#fc85b515" }}
                ></div>
              </a>
            </div>
            {
              <>
                {" "}
                {diplayCardAction} {console.log({ diplayCardAction })}
              </>
            }
            {diplayCardAction ? (
              <div className="position-absolute bottom-0 end-0">
                <MDBCard className="bg-light mb-3 mx-3">
                  <MDBContainer>
                    <MDBRow>
                      {/* <MDBCol className="pl-1 d-flex justify-content-center">
                        <a className="p-0" href="#">
                          <PlusSquare color="#cb2468" size={16} />
                        </a>
                      </MDBCol> */}
                      <MDBCol className="pl-1 d-flex justify-content-center">
                        <a href="#">
                          <HeartFill
                            color={favoriteIconBackgroundColor}
                            size={16}
                            onMouseOver={() =>
                              setFavoriteIconBackgroundColor("#cb2468")
                            }
                            onMouseLeave={() =>
                              setFavoriteIconBackgroundColor("black")
                            }
                          />
                        </a>
                      </MDBCol>
                      <MDBCol className="pl-1 d-flex justify-content-center">
                        <a
                          href="#"
                          onClick={() => dispatch(addToCart(article))}
                        >
                          <CartFill
                            color={cartIconBackgroundColor}
                            size={16}
                            onMouseOver={() =>
                              setCartIconBackgroundColor("#cb2468")
                            }
                            onMouseLeave={() =>
                              setCartIconBackgroundColor("black")
                            }
                          />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCard>
              </div>
            ) : (
              <></>
            )}
          </MDBRipple>

          <MDBCardBody className="p-2 bg-white">
            {/* <MDBCardSubTitle>{article.product.name}</MDBCardSubTitle> */}
            <MDBCardText className="text-truncate">
              {article.product.name}
            </MDBCardText>
            {/* <MDBBtn href='#'>Button</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBCol>
  );
}

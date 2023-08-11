import { Article } from "../Article";
import {
  Cart4,
  CurrencyDollar,
  Heart,
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
  MDBCardSubTitle,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import "./ArticleCard.module.scss";
import { useState } from "react";

export default function ArticleCard({ article }: { article: Article }) {
  let [diplayCardAction, setDisplayCardAction] = useState(false);

  return (
    <MDBCol md="4" lg="3" className=" mb-3">
      <MDBCard
        style={{ backgroundColor: "rgba(0, 0, 0, 0.06)", overflow: "hidden" }}
        onMouseMove={() => setDisplayCardAction(true)}
        onMouseLeave={() => setDisplayCardAction(false)}
      >
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <div className="cardtop">
            <Badge bg="secondary">
              {article.price}
              <CurrencyDollar />
            </Badge>
            <MDBCardImage
              src={`${Config.imageAssetsUrl}${article.product.image}`}
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
          {diplayCardAction ? (
            <div className="">
              <MDBCard className="bg-light mb-3 mx-3">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol className="pl-1 d-flex justify-content-center">
                      <a className="p-0" href="#">
                        <PlusSquare color="pink" size={16} />
                      </a>
                    </MDBCol>
                    <MDBCol className="pl-1 d-flex justify-content-center">
                      <a href="#">
                        <Heart color="pink" size={16} />
                      </a>
                    </MDBCol>
                    <MDBCol className="pl-1 d-flex justify-content-center">
                      <a href="#">
                        <Cart4 color="pink" size={16} />
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
          <MDBCardText>{article.product.name}</MDBCardText>
          {/* <MDBBtn href='#'>Button</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

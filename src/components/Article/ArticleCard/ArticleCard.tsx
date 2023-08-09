import { Article } from "../../../models/articles";
import './ArticleCard.module.scss';
import { Cart4, CurrencyDollar, Heart, PlusSquare } from "react-bootstrap-icons";

import Button from 'react-bootstrap/Button';
import {Badge, Card} from 'react-bootstrap';
// import img from '../../../../public/logo512.png'

export default function ArticleCard({article}: { article: Article }) {
    // article est passé en props de notre composant.
   return (
         <Card style={{ width: '18rem'}}>
         <div className="product-img">
            <Badge bg="secondary">{article.price}<CurrencyDollar/></Badge>
            <Card.Img  variant="top" src={`http://localhost:2020/assets/${article.product.image}`} />
            <div className="product-action">
               <div className="product-action-style">
                  <a href="#">
                     <PlusSquare color="pink" size={16} />
                  </a>
                  <a href="#">
                     <Heart color="pink" size={16} />
                  </a>
                  <a href="#">
                     <Cart4 color="pink" size={16} />
                  </a>
               </div>
            </div>
         </div>
         <div style={{backgroundColor: "#ee4c8a2d"}}>
            <Card.Title  className="product-name">{article.product.name}</Card.Title>
            <Card.Subtitle className="product-seller">Vendeur: {article.seller.name}</Card.Subtitle>
         </div>
      </Card>

   )
}
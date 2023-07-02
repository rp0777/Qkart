import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({product}) => {
  // const [product, setProduct] = useState({
  // "name":"Tan Leatherette Weekender Duffle",
  // "category":"Fashion",
  // "cost":150,
  // "rating":4,
  // "image":"https://crio-directus-assets.s3.ap-south-1.amazonaws.com/ff071a1c-1099-48f9-9b03-f858ccc53832.png",
  // "_id":"PmInA797xJhMIPti"
  // })

  return (
    <Card className="card">
      <CardMedia component="img" alt={product.name} image={product.image}/>
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography paddingY="0.5rem" fontWeight="700">
          ${product.cost}
        </Typography>
        <Rating 
        name="read-only"
        value={product.rating}
        precision={0.5}
        readOnly
        />
      </CardContent>
      <CardActions className="card-actions">
        <Button
          className="card-button"
          fullWidth
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
          // onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

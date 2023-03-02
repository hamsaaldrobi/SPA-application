import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.id}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}

export default ProductDetailPage;

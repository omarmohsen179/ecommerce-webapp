import Image from "../Image";
import "./index.css";
function CategoryList({ data = [], style }) {
  return (
    <div
      className=" main-category-container"
      style={({ backgroundColor: "#e8e8e8" }, style)}
    >
      <h2 style={{ textAlign: "center" }}>International cards</h2>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {data.map((ele) => (
          <div style={{ width: "120px" }}>
            <div
              className="border-item"
              style={{
                width: "115px",
                height: "80px",
                backgroundColor: "white",
                padding: "5px",
              }}
            >
              <Image src={ele.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;

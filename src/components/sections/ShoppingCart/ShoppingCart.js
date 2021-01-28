import React, { Component } from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBTooltip,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBInput,
  MDBBtn,
} from "mdbreact";

class ShoppingCart extends Component {
  state = {
    data: [
      {
        src:
          "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwY3VwfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
        title: "Coffee",
        subTitle: "Beverage",
        color: "White",
        price: "10",
        qty: "1",
      },
    ],
    columns: [
      {
        label: "",
        field: "img",
      },
      {
        label: <strong>Product</strong>,
        field: "product",
      },
      {
        label: <strong>Color</strong>,
        field: "color",
      },
      {
        label: <strong>Price</strong>,
        field: "price",
      },
      {
        label: <strong>QTY</strong>,
        field: "qty",
      },
      {
        label: <strong>Amount</strong>,
        field: "amount",
      },
      {
        label: "",
        field: "button",
      },
    ],
  };

  render() {
    const rows = [];
    const { columns, data } = this.state;

    data.map((row) => {
      return rows.push({
        img: <img src={row.src} alt="" className="img-fluid z-depth-0" />,
        product: [
          <h5 className="mt-3" key={new Date().getDate + 1} style={{color:"black"}}>
            <strong>{row.title}</strong>
          </h5>,
          <p key={new Date().getDate} className="text-muted">
            {row.subTitle}
          </p>,
        ],
        color: row.color,
        price: `₹${row.price}`,
        qty: (
          <MDBInput
            type="number"
            default={row.qty}
            className="form-control"
            style={{ width: "100px" }}
          />
        ),
        amount: <strong>${row.qty * row.price}</strong>,
        // button: (
        //   <MDBTooltip placement="top">
        //     <MDBBtn color="primary" size="sm">
        //       X
        //     </MDBBtn>
        //     <div>Remove item</div>
        //   </MDBTooltip>
        // ),
      });
    });

    return (
      <MDBRow className="my-2" center>
        <MDBCard className="w-75">
          <MDBCardBody>
            <MDBTable className="product-table">
              <MDBTableHead
                className="font-weight-bold"
                color="mdb-color lighten-5"
                columns={columns}
              />
              <MDBTableBody rows={rows} />
            </MDBTable>
            <MDBBtn color="primary">Checkout</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    );
  }
}

export default ShoppingCart;

import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import sample from "../img/sample.jpg";
import user from "../img/user.png";
import edit from "../img/edit.png";
import bin from "../img/delete.png";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src={sample} alt="" />
        <div className="user">
          <img src={user} alt="" />
          <div className="info">
            <span>Mog</span>
            <p>Posted 3 minutes ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=1`}>
              <img src={edit} alt="" />
            </Link>
            <img src={bin} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing ?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          molestie ligula. Vestibulum iaculis urna quis justo pellentesque, eu
          lobortis nibh aliquam. Nullam consectetur mollis dolor, at auctor urna
          laoreet vitae. Vestibulum dignissim sapien convallis lacus hendrerit
          molestie. Morbi nisi ligula, suscipit nec laoreet nec, semper sed
          eros. Sed scelerisque, nunc sed fringilla lacinia, augue massa
          eleifend arcu, sit amet vulputate ex sapien ultricies ligula. Vivamus
          dictum arcu augue, nec ultrices magna cursus id. Fusce a maximus
          ligula. Vestibulum ante ipsum primis in faucibus orci luctus et
          <br />
          <br />
          ultrices posuere cubilia curae; Suspendisse pharetra velit eget nibh
          euismod consequat. Nunc posuere scelerisque ante, ut maximus odio
          vestibulum vel. Suspendisse et felis facilisis, consequat quam ut,
          dignissim dui. Praesent non augue aliquet, auctor dolor sed, consequat
          libero. Sed elementum turpis nec quam egestas, ac eleifend felis
          sodales. Donec scelerisque mauris felis, vitae feugiat massa fringilla
          vitae. Suspendisse dapibus ornare blandit. Nullam blandit urna et
          aliquam porttitor. Pellentesque et tempus orci. Ut congue ex vel
          laoreet posuere. Sed in nulla id arcu faucibus tristique eu at quam.
          <br />
          <br />
          Nunc velit erat, varius id tellus ut, elementum euismod nisi. Sed
          eleifend lorem id est pharetra ultricies. Integer convallis lobortis
          arcu ac commodo. Donec a tincidunt ligula, non convallis velit. Nam
          quis nibh et ex viverra aliquet quis eu orci. Etiam at dui aliquam
          dolor finibus tincidunt. Aliquam volutpat, sem nec maximus facilisis,
          augue augue porta sem, mattis sollicitudin risus odio dictum enim.
          Vestibulum eu lectus nec erat convallis ultrices. Nunc non risus sem.
          In non posuere arcu. Sed aliquet elit nec dui egestas consequat sit
          amet vitae leo. Donec scelerisque, nulla ut eleifend suscipit, nibh
          est consectetur urna, eu sollicitudin ligula est id purus.
        </p>
      </div>
        <Menu />
    </div>
  );
}

export default Single;

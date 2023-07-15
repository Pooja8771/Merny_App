import React from "react";

function Profile() {
  return (
    <div style={{maxWidth:"500px" ,margin:'0px auto'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlcyUyMG9mJTIwaHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <h4>jyoti_kumari</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
              margin: "18px",
            }}
          >
            <h5>4 followers</h5>
            <h5>4 following</h5>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlcyUyMG9mJTIwaHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlcyUyMG9mJTIwaHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="item"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlcyUyMG9mJTIwaHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="item"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlcyUyMG9mJTIwaHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
}

export default Profile;

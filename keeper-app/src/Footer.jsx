import React from "react";

function Footer() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  return (
    <div>
      <p>Copyright Pakize Bozkurt {year}</p>
    </div>
  );
}

export default Footer;

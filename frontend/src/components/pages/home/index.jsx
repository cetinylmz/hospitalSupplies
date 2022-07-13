import React from "react";

import HospitalCard from "../../shared/HospitalCard";
function index() {
  return (
    <>
      <div class="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1  gap-4 p-4  w-full">
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
      </div>
    </>
  );
}

export default index;

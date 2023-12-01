import React, { useState } from 'react'


function ModAircrafts() {
  const [seatId, setSeatId] = useState("");
  const [type, setType] = useState("");
    return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          
        <div>
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5 animate__bounceIn">
              Flights List
            </h2>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default ModAircrafts